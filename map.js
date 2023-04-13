
/*
- - - -  Map

*/

console.clear()

let calc = [1,2,3,4];

let sum = calc.map((e)=>{
    return e * e
}).join("")
console.log(sum)

console.log('-------------------')
let aree = new Map();
aree.set("10", "hallo").set(10, "Imad").set(false, "Boolean");
console.log(aree);
