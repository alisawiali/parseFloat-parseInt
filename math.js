/*
Math Object

---> round() Näht die zahl
---> ceil() Nimmt oder geht nch oben( größte zahl)
---> floor  Nimmt die Kleinste Zahl
---> min() 
---> Mmx()
---> pow() console.log(Math.pow(2,5)) 32/ (Math.pow(2,4)) 16 ....etc
 for (i = 1; i <= 5; i++) {
  console.log(Math.pow(2, i));
}

---> random() bringt durcheinander Number 
---> trunc()
wenn wir diese Methode benutzen wollen denn müssen wir (Math erst benutzen)
*/

// round
console.log("-----round------");
let testround = 30.5;
console.log("Math.round is ", Math.round(testround) / 2); // 15,5
// Math.ceil
console.log("----ceil-------");
const testCeil = 22.2;
console.log(`Ceil nimmt größte zahl`, Math.ceil(testCeil)); // 23
// const sume = 3.33 + 1.99 +  (2.27 * 2 )  + (2.25 * 0.5);
// console.log(sume);
// const roundSum = Math.floor(sume)
// console.log(roundSum)

// Math.floor
console.log("-----floor------");
const testFloor = 25.5;
console.log(`floor nimmt die kelinste zahl ${Math.floor(testFloor)}`); // 25
// const sume = 3.33 + 1.99 +  (2.27 * 2 )  + (2.25 * 0.5);
// console.log(sume);
// const roundSum = Math.floor(sume)
// console.log(roundSum)
console.log("-----min------");
console.log("brigt die kleinst zahl", Math.min(1, 22, 3, 11, -2)); //-2

console.log("-----Max------");
console.log("bringt größte zahl", Math.max(1, 2, 44, 55, 100)); // 100

console.log("-----pow------");
console.log(Math.pow(2, 4)); // 16

console.log("-----random-----");
const testRaoundom = 3;
console.log(Math.random(testRaoundom)); // bringt  zahl durcheinander

console.log("<------------trunc------------->");
const testTrunc = 11.3;
console.log(
  "Math.trunc  nimmt weg und brginz integer nummer",
  Math.trunc(testTrunc)
);

console.log("##################");
let number = Math.floor(Math.random() * 10);

while (number !== 10) {
  console.log(++number);
}
console.log("##################");

let arr = [];

for (i = 0; i < 5; i++) {
  arr.push(Math.pow(2, i));
}

console.log(arr);

console.log("##################");

//           Math.random()  max - min +  min
let round = (Math.random() * (6 -  1)     +1)
console.log(round)

 