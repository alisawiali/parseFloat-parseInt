
/*
- - - -  Map

*/

console.clear()

let calc = [1,2,3,4];

let sum = calc.map((e)=>{
    return e * e
}).join("")
console.log(sum)