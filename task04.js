var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Balance Deposit: ".concat(amount));
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && this.balance > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Balance Withdraw: ".concat(amount));
        }
    };
    BankAccount.prototype.checkBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var bankAccount1 = new BankAccount('001');
console.log("Balance: ".concat(bankAccount1.checkBalance()));
bankAccount1.deposit(150);
bankAccount1.withdraw(9000);
console.log("Latest Balance: ".concat(bankAccount1.checkBalance()));
