export class Book{
    bName:string;
    bAuthor:string;
    constructor(name:string,author:string){
        this.bName = name;
        this.bAuthor = author;
    }
    details(){
        return `Name: ${this.bName}, Author: ${this.bAuthor}`;
    }
}