"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myData_1 = require("./myData");
var addition_1 = require("./addition");
console.log(myData_1.firstName + " " + myData_1.lastName);
var sObj = new myData_1.Student("Thameem", 500);
console.log(sObj.display());
console.log((0, addition_1.add)(1, 2));
