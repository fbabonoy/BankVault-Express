# BankVault Express

BankVault Express is a simple banking application built with Node.js and Express. It allows users to create accounts, deposit money, withdraw money, and view transaction history. Authentication is included as an optional bonus feature.

## Features

### Core Features
- Create a new bank account
- Deposit money into an account
- Withdraw money from an account
- View transaction history for each account

### Optional Bonus Feature
- Authentication: Secure login system to ensure only authorized users can access their accounts.

## Technologies Used
- **Backend**: Node.js, Express

## API Endpoints

### routes
- `GET /accounts`: explains data.                                                  
- `POST /accounts`: Create a new account.                                                  
http://localhost:8085/accounts/?api-key=admin

- `GET /transactions`: View all transactions history.                                                     
http://localhost:8085/transactions

- `GET /accounts/:id`: root explanation.
- `PATCH /accounts/:id`: updates account
- `DELETE /accounts/:id`: deletes selected account
http://localhost:8085/accounts/johndoe@example.compassword123/?api-key=admin

- `POST /accounts/:id/deposit`: Deposit money into an account.
http://localhost:8085/accounts/johndoe@example.compassword123/deposit/?api-key=admin

- `POST /accounts/:id/withdraw`: Withdraw money from an account.
http://localhost:8085/accounts/johndoe@example.compassword123/withdraw/?api-key=admin

- `GET /accounts/:id/transactions`: View transaction history.
http://localhost:8085/accounts/johndoe@example.compassword123/transactions/?api-key=admin

- `GET /accounts/:id/transactions/:transactionId`: View a specific transaction detail.
- `DELETE /accounts/:id/transactions/:transactionId`: deletes selected transfer
http://localhost:8085/accounts/johndoe@example.compassword123/transactions/txn1/?api-key=admin

- `DELETE /accounts/:id/transactions/:transactionId`: Remove a specific transaction 
http://localhost:8085/accounts/johndoe@example.compassword123/transactions/txn1.?api-key=admin


<!-- if there is time -->
### Authentication (Bonus)
- authentication was not finished still needs to add token and remove after a period of time.
- missing registration form <a> link was used for testing

- `GET /auth`: sends file with form. 
- `POST /auth`: redirects.                                                                       
http://localhost:8085/auth

<!-- there is no real authentication though -->

