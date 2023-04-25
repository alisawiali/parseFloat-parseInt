/*
 - - - - Array Methoden

  forEach, MAp, filter, reduce

*/
console.clear();

//   forEach

console.log("#".repeat(20), " forEach ------------------>");
let number = [1, 2, 3, 4, 5]; // Index
let names = ["Omer", "Amer", "Imad", "Ali", "Omran"];

number.forEach(function (e, x) {
  console.log( e + x);
});

console.log("#".repeat(20), " Map ------------------>");
let x = names.map((e) => {
  let result = "";
  result = e.startsWith("O");
  return result;
});

console.log(x);
console.log("#".repeat(20), " map ------------------>");


let namen = [{name: "Omer",nachmahme: "Alisawi",zahl:[1,2,3]}];
let test = namen.map((e,t) => {
   const fullName = `${e.name} ${e.nachmahme}`;
   return fullName

  }).join(",")


console.log(test);

console.log("#".repeat(20), " filter One------------------>");
number = ["Omer", "Amer", "Imad", "Ali", "Omran"]; // Index
let namenFilter = number.filter((e,x)=>{
   // return x < 4
   // e.  startsWith("I")
   return e[0] === "I"
})

console.log(namenFilter)

console.log("#".repeat(20), " filter Tow------------------>");

const words = ["spary","Limit","elite","exuberant","destruction","preesent"]
const result = words.filter((w)=> w.length < 6) // kleins word das als 6 Buchstaben hat. und es zwar [ 'spary', 'Limit', 'elite' ]
console.log(result)


console.log("#".repeat(20), "---> Reduce  ------------------>");
const wordss = ["spary","Limit","elite","exuberant","destruction","preesent"]

let myRudces =  wordss.reduce((acc,ele,i)=>{
    console.log(ele + ": "+ acc)   
      return acc + " " + ele
});
console.log(myRudces)