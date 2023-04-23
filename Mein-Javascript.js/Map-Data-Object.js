/*
  ---- Map Data Object

*/

console.clear();
let myOb = {};
let myMap = new Map();
console.log(myOb);
console.log(myMap);

let myObject = {
  10: "Number",
  10: "String",
};
console.log(myObject, '10: "String" ===>  Nimmt das leste bei Object'); //
console.log("##".repeat(20));

let myNewMap = new Map();
myNewMap.set(  10, "Number")
myNewMap.set(  '10', "String")
console.log(myNewMap.get('10')) // mit get holen wir das Property keys....