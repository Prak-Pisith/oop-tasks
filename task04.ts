class BankAccount {
  private accountNumber: string;
  private balance: number = 0;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Balance Deposit: ${amount}`);
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && this.balance > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Balance Withdraw: ${amount}`);
    }
  }

  checkBalance(): number {
    return this.balance;
  }
}

const bankAccount1 = new BankAccount('001');
console.log(`Balance: ${bankAccount1.checkBalance()}`);
bankAccount1.deposit(150);
bankAccount1.withdraw(9000);
console.log(`Latest Balance: ${bankAccount1.checkBalance()}`);