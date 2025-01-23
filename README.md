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
- **Templating Engine**: EJS
- **Database**: MongoDB (via MongoDB Atlas)
- **Styling**: Bootstrap (optional for UI improvements)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bankvault-express.git
   cd bankvault-express
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key_for_authentication
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Deployment

1. Push your code to a GitHub repository.
2. Deploy the application on your preferred hosting platform (e.g., Render, Vercel, Railway, or Heroku).
3. Set the necessary environment variables on the hosting platform:
   - `PORT`
   - `MONGO_URI`
   - `SECRET_KEY`

## API Endpoints

### Accounts
- `POST /accounts`: Create a new account.
- `POST /accounts/:id/deposit`: Deposit money into an account.
- `POST /accounts/:id/withdraw`: Withdraw money from an account.
- `GET /accounts/:id/transactions`: View transaction history.


<!-- if there is time -->
<!-- ### Authentication (Bonus)
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in as an existing user. -->


## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For questions or suggestions, feel free to contact me at [your email address].

