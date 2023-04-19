
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

console.log('---------Map ----------')
let arr = [10,20,30,40,50];
let myMap = arr.map((e)=>{
  return e * 10
})
console.log(myMap)