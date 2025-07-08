"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.lastName = exports.firstName = void 0;
exports.firstName = "fahim";
exports.lastName = "Iqbal";
var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.sName = name;
        this.sMarks = marks;
    }
    Student.prototype.display = function () {
        return "Name: ".concat(this.sName, " Marks:").concat(this.sMarks);
    };
    return Student;
}());
exports.Student = Student;
