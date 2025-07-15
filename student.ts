// interface StudentDetails {
//     name: string;
//     rollNo: number;
//     marks: number[];
//     calculateTotal(): number;
//     calculateAverage(): number;
//     calculateGrade(): string;

// }

// class Student implements StudentDetails{
//     name: string;
//     rollNo: number;
//     marks: number[];

//     constructor(name: string, rollNo: number, marks: number[]) {
//         this._name = name;
//         this._rollNo = rollNo;
//         this._marks = marks;
//     }
    
//     get _name(){
//         return this._name;
//     }
//     set _name(val:string){
//         this._name=val;
//     }
    
//     get _rollNo(){
//         return this._rollNo;
//     }
//     set _rollNo(val:number){
//         this._rollNo=val;
//     }

//     get _marks(): number[]{
//         return this._marks;
//     }
//     set _marks(val:number[]){
//         this._marks=val;
//     }

//     calculateTotal(): number {
//         return this._marks[0]+this._marks[1]+this._marks[2];
//     }
//     calculateAverage(): number {
//         throw new Error("Method not implemented.");
//     }
//     calculateGrade(): string {
//         throw new Error("Method not implemented.");
//     }
// }
// let a = new Student("Fahim",123,[55,55,55]);
// console.log(a.calculateTotal());

// interface StudentDetails {
//     name: string;
//     rollNo: number;
//     marks: number[];
//     calculateTotal(): number;
//     calculateAverage(): number;
//     calculateGrade(): string;
// }

// class Student implements StudentDetails {
//     private _name: string;
//     private _rollNo: number;
//     private _marks: number[];

//     constructor(name: string, rollNo: number, marks: number[]) {
//         this._name = name;
//         this._rollNo = rollNo;
//         this._marks = marks;
//     }

//     get name() {
//         return this._name;
//     }
//     set name(val: string) {
//         this._name = val;
//     }

//     get rollNo() {
//         return this._rollNo;
//     }
//     set rollNo(val: number) {
//         this._rollNo = val;
//     }

//     get marks(): number[] {
//         return this._marks;
//     }
//     set marks(val: number[]) {
//         if (val.length === 3) {
//             this._marks = val;
//         } else {
//             console.error("Please provide exactly 3 marks.");
//         }
//     }

//     calculateTotal(): number {
//         return this._marks.reduce((acc, mark) => acc + mark, 0);
//     }

//     calculateAverage(): number {
//         return this.calculateTotal() / this._marks.length;
//     }

//     calculateGrade(): string {
//         const average = this.calculateAverage();
//         if (average >= 90) {
//             return 'A';
//         } else if (average >= 80) {
//             return 'B';
//         } else if (average >= 70) {
//             return 'C';
//         } else if (average >= 60) {
//             return 'D';
//         } else {
//             return 'F';
//         }
//     }
// }

// // Example usage
// let a = new Student("John Doe", 101, [1, 2, 3]);
// console.log(a.calculateTotal()); // Output: 6
// console.log(a.calculateAverage()); // Output: 2
// console.log(a.calculateGrade()); // Output: F

interface Studentdetails{

 calculateTotal();
 calculateAverage();
 calculateGrade();
 
}
class Student implements Studentdetails {
    name: string;
    roll: number;
    mark1: number;
    mark2: number;
    mark3: number;
   
    get _name() {
        return this.name;
    }
    set _name(val: string) {
        this.name= val;
    }
 
    get _roll() {
        return this.roll;
    }
    set _roll(val: number) {
        this.roll = val;
    }
 
    get _mark1() {
        return this.mark1;
    }
    set _mark1(val: number) {
        this.mark1= val;
    }
 
     get _mark2() {
        return this.mark1;
    }
    set _mark2(val: number) {
        this.mark1= val;
    }
 
     get _mark3() {
        return this.mark1;
    }
    set _mark3(val: number) {
        this.mark1= val;
    }

    calculateAverage() {
       return (this._mark1+this._mark2+this._mark3)/3;         
    }

    calculateTotal() {
        return this._mark1+this._mark2+this._mark3;
    }

    calculateGrade() {
        const average = this.calculateAverage();
        if(average>=90){
            return 'A';
        }else if(average>=80){
            return 'B';
        }else if(average>=70){
            return 'C';
        }else{
            return 'F';
        }        
    }
 

}
 
let obj = new Student();
obj.name = "Fahim";
obj.roll = 201;
obj.mark1 = 90;
obj.mark2 = 91;
obj.mark3 = 95;
 
 
 
console.log(obj.calculateAverage());
console.log(obj.calculateGrade());
console.log(obj.calculateTotal());
 
 
