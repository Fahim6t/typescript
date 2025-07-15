import {firstName,lastName, Student} from "./myData";

import add from "./addition";

console.log(firstName+" "+lastName);

let sObj = new Student("Thameem",500);
console.log(sObj.display());

console.log(add(1,2));
