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

### Accounts
- `POST /accounts`: Create a new account.
- `GET /transactions`: View all transactions history.
- `POST /accounts/:id/deposit`: Deposit money into an account.
- `POST /accounts/:id/withdraw`: Withdraw money from an account.
- `GET /accounts/:id/transactions`: View transaction history.
- `GET /accounts/:id/transactions/:transactionId`: View a specific transaction detail.
- `DELETE /accounts/:id/transactions/:transactionId`: Remove a specific transaction 


<!-- if there is time -->
### Authentication (Bonus)
- `POST /auth`: sends file with form
<!-- there is no real authentication though -->

