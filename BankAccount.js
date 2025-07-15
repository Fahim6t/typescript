var BankAccount = /** @class */ (function () {
    function BankAccount(name, balance, accountnumber) {
        this.acntHolderName = name;
        this.balance = balance;
        this.acntNumber = accountnumber;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            return this.balance += amount;
        }
        return "Error";
    };
    BankAccount.prototype.withraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            return this.balance -= amount;
        }
        return "Error";
    };
    BankAccount.prototype.displayBalance = function () {
        return "Name: ".concat(this.acntHolderName, " || AccountNumber: ").concat(this.acntNumber, " || Balance: ").concat(this.balance);
    };
    return BankAccount;
}());
var result = new BankAccount("Fahim", 4000, "1234");
result.deposit(100);
console.log(result.displayBalance());
result.withraw(200);
console.log(result.displayBalance());
