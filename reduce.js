/*
-  - - - Reduce
    
 */
console.clear();

let calc = [1, 2, 3, 4];
//                     حاضِر  قيمة
let sum = calc.reduce((acc, current, index, a) => {
  return acc + current;
}, 10);
console.log(sum);
console.log("######  <------------------->  #######");
// hier holen wir das kleine length innder Array
let names = ["Imad", "Ali", "Omer", "Amer", "Alisawi"];

let check = names.reduce((e, c) => {
  return e.length < c.length ? e : c;
});
console.log(check);

console.log("######  <---------Tow---------->  #######");

let myFrinds = ["i", "@", "@", "m", "@", "a", "d"];


let filt = myFrinds
  .filter((e) => {
    return !e.startsWith("@");
  })
  .reduce((acc, current) => {

    return `${acc}${current}`;
  })

// Reduce ist gleich join()

console.log(filt);
