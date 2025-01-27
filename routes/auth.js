const express = require("express")
const router = express.Router()

const emails = require("../data/logIn")

router
    .route("/")
    .post((req, res, next) => {


        let email = req.body.email
        let password = req.body.password

        if (email && password && emails[email] === password) {
            
            res.redirect(`/users/${email + password}/?api-key=${"admin"}`)
        } else {
            next()
        }
    })

module.exports = router