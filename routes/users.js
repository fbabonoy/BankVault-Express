const express = require("express")
const router = express.Router()

const accounts = require("../data/accounts")
const transactions = require("../data/transactions")
const emailsInUse = require("../data/logIn")


router
    .route("/")
    .get((req, res) => {
        const links = [{
            href: "/accounts/:id",
            rel: "id: email + password",
            type: "GET"
        }];
        res.json({ users: accounts, links });

    })
    .post((req, res, next) => {
        
        
        if (req.body.accountHolder && req.body.email && req.body.password && !(req.body.email in emailsInUse)) {
            let acc = ""

            do {
                acc = "ACC" + Math.floor(Math.random()* 1000000)                
            } while (acc in transactions)
            
            transactions[acc] = []
            emailsInUse[req.body.email] = req.body.password

            const newAccount = {
                accountHolder: req.body.accountHolder,
                accountNumber: acc,
                balance: 300.0,
                email: req.body.email,
                password: req.body.password
            }
            const id = newAccount.email+newAccount.password

            accounts[id] = newAccount
            res.json({ newAccount });
        }
        else next();

    })

router
    .route("/:id")
    .get((req, res, next) => {
        let user = accounts[req.params.id]
        if (user) {
            const links = [
                {
                    href: `/${req.params.id}`,
                    rel: "",
                    type: "PATCH",
                },
                {
                    href: `/${req.params.id}`,
                    rel: "",
                    type: "DELETE",
                },
                {
                    href: `/${req.params.id}/transactions`,
                    rel: "id",
                    type: "GET",
                },
                {
                    href: `/${req.params.id}/deposit`,
                    rel: "id",
                    type: "POST",
                },
                {
                    href: `/${req.params.id}/withdraw`,
                    rel: "id",
                    type: "POST",
                },
            ];

            res.json({ user, links });
        }
        else next();
    })
    .patch((req, res, next) => {
        let user = accounts.filter((user, index) => {
            if (user.id === req.params.id) {
                for (const key in req.body) {
                    if (key !== "balance" || key !== "accountNumber") {
                        accounts[index][key] = req.body[key]
                    }
                }
                return true

            }

        })

        if (user) res.json({ user, links });
        else next();

    })
    .delete((req, res, next) => {
        let user = accounts[req.params.id]
        delete accounts[req.params.id]
        // console.log(users);

        if (user) res.json({ user });
        else next();
    })

router
    .route("/:id/deposit")
    .post((req, res, next) => {
        
        let account = accounts[req.params.id]
        account.balance += req.body.amount;
        let transactionsAccount = transactions[account.accountNumber]

        let deposit = {
            transactionId: `txn${transactionsAccount.length + 1}`,
            type: "deposit",
            amount: req.body.amount,
            date: new Date()
        }

        transactionsAccount.push(deposit)

        if (req.body.amount) res.json({ transaction: deposit })
        else next();
    })

router
    .route("/:id/withdraw")
    .post((req, res, next) => {

        let account = accounts[req.params.id]
        account.balance -= req.body.amount;
        let transactionsAccount = transactions[account.accountNumber]

        let withdraw = {
            transactionId: `txn${transactionsAccount.length + 1}`,
            type: "withdraw",
            amount: req.body.amount,
            date: new Date()
        }

        transactionsAccount.push(withdraw)

        if (req.body.amount) res.json({ withdraw })
        else next();
    })

router
    .route("/:id/transactions")
    .get((req, res, next) => {

        const link = [
            {
                href: `/${req.params.id}/transactions/:transactionId`,
                rel: "id",
                type: "GET",
            }
        ]


        let userTransfers = transactions[accounts[req.params.id].accountNumber]
        if (transactions) res.json({ userTransfers, link })
        else next();
    })





router
    .route("/:id/transactions/:transactionId")
    .get((req, res, next) => {

        const link = [
            {
                href: `/${req.params.id}/transactions/:transactionId`,
                rel: "id",
                type: "DELETE",
            },
        ]


        let userTransfers = transactions[accounts[req.params.id].accountNumber]
        let transfer = userTransfers.filter((transfer) => {
            // console.log(transfer.transactionId);
            return transfer.transactionId === req.params.transactionId
        })
        if (transactions) res.json({ transfer, link })
        else next();
    })
    .delete((req, res, next) => {
        let userTransfers = transactions[accounts[req.params.id].accountNumber]
        let transactionId = req.params.transactionId
        let deleted
        userTransfers.forEach((transfer, index) => {
            if (transfer.transactionId === transactionId) {
                deleted = userTransfers[index]
                userTransfers.splice(index, 1)
            }
        });

        if (deleted) res.json({ deleted });
        else next();
    })

module.exports = router;
