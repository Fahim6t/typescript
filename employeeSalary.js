var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empBaseSalary = salary;
    }
    EmployeeSalary.prototype.calculateHRA = function () {
        return 0.20 * this.empBaseSalary;
    };
    EmployeeSalary.prototype.calculateDA = function () {
        return 0.10 * this.empBaseSalary;
    };
    EmployeeSalary.prototype.calculateTotal = function () {
        return 0.20 * this.empBaseSalary + 0.10 * this.empBaseSalary + this.empBaseSalary;
    };
    EmployeeSalary.prototype.display = function () {
        console.log("ID:" + this.empId);
        console.log("Name:" + this.empName);
        console.log("HRA:" + this.calculateHRA());
        console.log("DA:" + this.calculateDA());
        console.log("Total:" + this.calculateTotal());
    };
    return EmployeeSalary;
}());
var ans = new EmployeeSalary(1, "Fahim", 20450);
ans.display();
