
class BankAccount {
  constructor(balance) {
      let _balance = balance; 

      this.getBalance = function () {
          return _balance;
      };

      this.deposit = function (amount) {
          _balance += amount;
      };
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log("Balance:", account.getBalance());
