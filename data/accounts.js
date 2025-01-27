const accounts = {
  "johndoe@example.compassword123": {
      accountHolder: "John Doe",
      accountNumber: "ACC123456",
      balance: 1000.0,
      email: "johndoe@example.com",
      password: "password123"
  },
  "janesmith@example.comsecurepass456": {
      accountHolder: "Jane Smith",
      accountNumber: "ACC987654",
      balance: 5000.0,
      email: "janesmith@example.com",
      password: "securepass456"
  },
  "alicejohnson@example.commypassword789": {
      accountHolder: "Alice Johnson",
      accountNumber: "ACC112233",
      balance: 300.0,
      email: "alicejohnson@example.com",
      password: "mypassword789"
  },
  "bobbrown@example.compasskey321": {
      accountHolder: "Bob Brown",
      accountNumber: "ACC667788",
      balance: 7500.0,
      email: "bobbrown@example.com",
      password: "passkey321"
  }
};



  module.exports = accounts;






  // class Account {
    //   #balance
    //   constructor(accountHolder, accountNumber, email, password, balance){
    //     this.accountHolder = accountHolder
    //     this.accountNumber = accountNumber
    //     this.email = email
    //     this.password = password
    //     this.#balance = balance; 
    
    //   }
    
    //   get balance(){
    //     return this.#balance
    //   }
    
    //   set balance(ammount) {
    //     this.#balance += ammount
    //     return this.#balance
    //   }
    // }