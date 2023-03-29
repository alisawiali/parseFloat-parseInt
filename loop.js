
/*
Loop
-- Lopp On Sequences
--  Nested Loops Training 
*/ 

let myFreind = [1,"Imad","Omer","Alaa",2,3,4,5,6,"Amer","Ali"];
let onlyName = [];

for(let i = 0; i < myFreind.length ; i++){
  if(typeof myFreind[i] !== "string"){
    onlyName.push(myFreind[i])
  }else if(typeof myFreind[i] === "number"){
    onlyName.shift(myFreind[i])
  }
}
console.log(onlyName);

// Nested Loops Training 
console.log("// Nested Loops Training -------------->")

let product = ["Keybord","Muose","MackBock"];
let farbe = ["Red","Gelb","Black"];
let model =[ 2020,2023];

for(let i = 0; i < product.length;i++){
   console.log(`### ${product[i]}`);
   console.log("farbe")
   for(let t = 0; t < farbe.length;t++){
        console.log(`${farbe[t]}`);
       
        for(let r = 0; r < model.length;r++){
            console.log(`__${model[r]}`)
        }
   }
}

// ------------------------------------------------
// console.log('---------------------------->')
// let test = 20;
// for(let e = 0;e <= test;e++){
//   if(e % 3 === 0 && e % 5 === 0){
//     console.log('FizzBuzz');
//   }else if(e % 3 === 0){
//     console.log('Fizz');
//   }else if(e % 5 === 0){
//     console.log('Buzz');
//   }else{
//     console.log( e);
//   }
 
//}
//--------Zweit Lösung------>
// output ===>انتاج 
for(let x = 1; x <= 50; x++){
  let output = "";
  let first = 3;
  let second = 5;
  if( x % first == 0){output+= "Fizz" }
  if( x % second == 0){output += 'Buzz'}
  if(output === ""){output = x}
  console.log(output)
}
//## Aufgabe 1 - Addition
console.log('//## Aufgabe 1 - Addition---->')
let i = 1;
let result = 0;

while (i <= 20) {
    result += i;
    console.log('plaintext ', result)
    i++;
}

//## Aufgabe 2 - Es befinden sich i Bierflaschen an der Wand
console.log('//## Aufgabe 2 -------->')
for (let x = 1; x <= 5; x++) {
    console.log(`There is ${x} bottle of beer on the wall`)
}




console.log('//## Aufgabe 3 -------->')
for (let e = 0; e < 6; e++) {
    if (e % 2 === 0) {
        console.log(e + ' is even')
    } else {
        console.log(e + ' is odd')
    }

}

// ## Aufgabe 4 - Multiplikationstabelle
console.log("-------## Aufgabe 4 - Multiplikationstabelle----------")
let test = 10;
for (let v = 1; v <= test; v++) {
    let reults = v * 9;
    console.log(`${v + 0} * 9 = ${reults}`)
}
console.log("-------## Aufgabe 4.1----------")
for (let z = 1; z < 5; z++) {
    for (let m = 1; m <= 5; m++) {
        let Ergebnis = z * m;
        console.log(`${z} * ${m}  = ${Ergebnis}`)
    }
}
console.log('## Aufgabe 5 - Fizz Buzz------->')
for (let b = 0; b <= 20; b++) {
    if (b % 3 === 0 && b % 5 === 0) {
        console.log(`FizzBuzz`)
    } else if (b % 3 === 0) {
        console.log(`Fizz`)
    } else if (b % 5 === 0) {
        console.log(`Buzz`)
    } else {
        console.log(b)
    }
}

// //## Aufgabe 6 - Summe von Vielfachen
console.log('## Aufgabe 6 -------')
let sums = 0;
for (let p = 0; p < 1000; p++) {
    if (p % 3 === 0 && p % 5 === 0) {
        sums += p;
    }
}
console.log(sums);

console.log("------### Zusatzaufgabe 1-----")
for (let a = 100; a <= 1000; a += 100) {
    console.log(a)
}
console.log("------### Zusatzaufgabe 2-----")
for (let ü = 0; ü <= 10; ü += 2) {
    console.log(ü)
}
console.log("------### Zusatzaufgabe 3-----")
for (let s = 0; s <= 15; s += 3) {
    console.log(s)
}
console.log("------### Zusatzaufgabe 4-----")
for (let c = 9; c >= 0; c--) {
    console.log(c)
}


 console.log("------### Zusatzaufgabe 5-----")

for (let o = 0; o <= 4; o++) {
    console.log(o)
    console.log(o)
    console.log(o)
}

//  console.log("------### Zusatzaufgabe 6-----")
