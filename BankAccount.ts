class BankAccount{
    private acntHolderName: string;
    private balance: number;
    private acntNumber: string;

    constructor(name:string,balance:number,accountnumber:string){
        this.acntHolderName = name;
        this.balance = balance;
        this.acntNumber = accountnumber;
    }

    public deposit(amount:number){
        if(amount>0){
            return this.balance+= amount;
        }
        return `Error`;
    }

    public withraw(amount:number){
        if(amount>0 && amount<=this.balance){
            return this.balance -= amount;
        }
        return `Error`;
    }

    public displayBalance(){
        return `Name: ${this.acntHolderName} || AccountNumber: ${this.acntNumber} || Balance: ${this.balance}`;
    }

}

let result = new BankAccount("Fahim",4000,"1234");
result.deposit(100);
console.log(result.displayBalance());
result.withraw(200);
console.log(result.displayBalance());
