console.clear();
/**
   Waht is JSON
    : JAVASCRIPT OBJECT NOTATION
 */

const myJson = '{"UserName":"Imad", "age":33}'; // JSON object
console.log(myJson);
// -----------
console.log();
// wir haben JSON zu js
const myObject = JSON.parse(myJson); //{ UserName: 'Imad', age: 33 }
console.log("wir haben JSON zu js  mit (parse) ====>", myObject);
// ------------
console.log();
const myObjectThree = JSON.stringify(myJson); //  ===> "{\"UserName\":\"Imad\", \"age\":33}"
console.log("\n", myObjectThree);
// ------------
console.log();
// Wir haben die Date gewechslt
myObject["UserName"] = "Alisawi";
myObject.age = 37;
console.log("Wir haben die Date gewechslt  ====>", myObject); //   =>  UserName: 'Alisawi', age: 37 }

console.log();
// wir senden das Object  zu server
// wechseln js object zu JSON object

const objectJsonServer = JSON.stringify(myObject);
console.log(" von js To JSON change mit (stringify) ====>", objectJsonServer); //  ===> {"UserName":"Alisawi","age":37}
