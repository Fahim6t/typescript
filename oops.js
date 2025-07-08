var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, salary, isSingle) {
        // data-member
        this.empId = 1234;
        this.eName = "Fahim";
        this.eSalary = 23456;
        this.eSingle = true;
        this.empId = id;
        this.eName = name;
        this.eSalary = salary;
        this.eSingle = isSingle;
    }
    // member-fuction
    Employee.prototype.employeeDetails = function () {
        return "Id:".concat(this.empId, " Name:").concat(this.eName, " Salary:").concat(this.eSalary, " Single:").concat(this.eSingle);
    };
    return Employee;
}());
//Object Creation
// var empObj = new Employe(123,"Fahim",53478,true);
// console.log(empObj.eName);
// console.log(empObj.employeeDetails());
// var empObj1 = new Employe(167,"Vaseem",62382,true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company(id, name, salary, single, compName, compAddress) {
        var _this = _super.call(this, id, name, salary, single) || this;
        _this.cName = compName;
        _this.cAddress = compAddress;
        return _this;
    }
    company.prototype.employeeDetails = function () {
        return "Id:".concat(this.empId, " Name:").concat(this.eName, " Salary:").concat(this.eSalary, " Single:").concat(this.eSingle, " CompanyName:").concat(this.cName, " CompanyAddress:").concat(this.cAddress);
    };
    return company;
}(Employee));
var compObj = new company(201, "Hasim", 67238, false, "Bosch", "Chennai");
console.log(compObj.employeeDetails());
