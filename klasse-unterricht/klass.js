


const mathOne = Math.min(33,30,40);
console.log(`Math Min die kleinste Nummer ist ${mathOne}:`,mathOne);


mathTow = Math.max(23,43,30);
//names =["Imad", "Omer","Ali"]
console.log(`Math Min die größte  Nummer ist ${mathTow}:`);

// const con = names.concat(mathTow);
// console.log(con)

// --------------------------------
//           käse  Butter    2 Battrie       
const sume = 3.33 + 1.99 +  (2.27 * 2 )  + (2.25 * 0.5);
console.log(sume);

const roundSum = Math.ceil(sume * 100)/ 100 // Damit wir ein ,00  zahl haben (ceil,floor) 
console.log(roundSum);
// --------------------------------
//                0 - 0 ,0000000 es wird nie eins
const randomOne = Math.floor(Math.random() * 49 )+ 1;
console.log(randomOne);


let testing = Math.floor(parseFloat(20.3)) + 1;
console.log(testing);