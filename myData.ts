export let firstName:string = "fahim";
export let lastName:string = "Iqbal";

export class Student{
    sName:string;
    sMarks:number;

    constructor(name:string,marks:number){
        this.sName = name;
        this.sMarks = marks;
    }

    display(){
        return `Name: ${this.sName} Marks:${this.sMarks}`;
    }
}