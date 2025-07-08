class Employee{

    // data-member
    empId:number= 1234;
    eName:string="Fahim";
    eSalary:number=23456;
    eSingle:boolean=true;

    constructor(id:number,name:string,salary:number,isSingle:boolean){
        this.empId=id;
        this.eName=name;
        this.eSalary=salary;
        this.eSingle=isSingle;
    }

    // member-fuction
    employeeDetails(){
        return `Id:${this.empId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle}`
    }

}

//Object Creation
// var empObj = new Employe(123,"Fahim",53478,true);
// console.log(empObj.eName);
// console.log(empObj.employeeDetails());

// var empObj1 = new Employe(167,"Vaseem",62382,true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());


class company extends Employee{
    cName:string;
    cAddress:string;

    constructor(id:number, name:string, salary:number,single:boolean,compName:string,compAddress:string){
        super(id,name,salary,single);
        this.cName=compName;
        this.cAddress=compAddress;
    }

    employeeDetails(){
        return `Id:${this.empId} Name:${this.eName} Salary:${this.eSalary} Single:${this.eSingle} CompanyName:${this.cName} CompanyAddress:${this.cAddress}`
    }
}

let compObj = new company(201,"Hasim",67238,false,"Bosch","Chennai");
console.log(compObj.employeeDetails());