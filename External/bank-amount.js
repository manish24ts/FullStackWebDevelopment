class BankAccount {
    constructor(accountNumber, balance = 0) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log("Insufficient balance or invalid withdrawal amount.");
      }
    }	
    displayBalance() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  let account1 = new BankAccount("123456789", 1000);
  let account2 = new BankAccount("987654321");
  
  account1.deposit(500);
  account1.withdraw(300);
  account1.displayBalance();
  
  account2.deposit(200);
  account2.withdraw(50);
  account2.displayBalance();
  