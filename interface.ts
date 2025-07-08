interface Person{
   details();
}
class PDetails implements Person{
    pName:string;
    pAge:number;
    
    constructor(name:string,age:number){
        this.pName = name;
        this.pAge = age;
    }
    details(){
        return `Person Name:${this.pName} and Age:${this.pAge}`;
    }
}
let delObj = new PDetails("Fahim",24);
console.log(delObj.details());