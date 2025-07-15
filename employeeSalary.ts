class EmployeeSalary{
    empId:number;
    empName:string;
    empBaseSalary:number;

    constructor(id:number, name:string, salary:number){
        this.empId = id;
        this.empName = name;
        this.empBaseSalary=salary;
    }

    calculateHRA(){
        return 0.20 * this.empBaseSalary;
    }

    calculateDA(){
        return 0.10 * this.empBaseSalary;
    }

    calculateTotal(){
        return 0.20 *this.empBaseSalary + 0.10*this.empBaseSalary + this.empBaseSalary;
    }

    display():void{
        console.log("ID:" +this.empId);
        console.log("Name:" +this.empName);
        console.log("HRA:" +this.calculateHRA());
        console.log("DA:" +this.calculateDA());
        console.log("Total:" +this.calculateTotal());
    }
    
}

let ans = new EmployeeSalary(1,"Fahim",20450);
ans.display();
