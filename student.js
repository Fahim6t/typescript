// interface StudentDetails {
//     name: string;
//     rollNo: number;
//     marks: number[];
//     calculateTotal(): number;
//     calculateAverage(): number;
//     calculateGrade(): string;
var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_roll", {
        get: function () {
            return this.roll;
        },
        set: function (val) {
            this.roll = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_mark1", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_mark2", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "_mark3", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.calculateAverage = function () {
        return (this._mark1 + this._mark2 + this._mark3) / 3;
    };
    Student.prototype.calculateTotal = function () {
        return this._mark1 + this._mark2 + this._mark3;
    };
    Student.prototype.calculateGrade = function () {
        var average = this.calculateAverage();
        if (average >= 90) {
            return 'A';
        }
        else if (average >= 80) {
            return 'B';
        }
        else if (average >= 70) {
            return 'C';
        }
        else {
            return 'F';
        }
    };
    return Student;
}());
var obj = new Student();
obj.name = "Fahim";
obj.roll = 201;
obj.mark1 = 90;
obj.mark2 = 91;
obj.mark3 = 95;
console.log(obj.calculateAverage());
console.log(obj.calculateGrade());
console.log(obj.calculateTotal());
