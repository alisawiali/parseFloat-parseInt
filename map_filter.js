/*
 - - - - Fillter 

*/
console.clear();

let names = ["Imad", "Ali", "Omer", "Osama", "Imam"];
let number = [1, 2, 3, 5, 6];



let addfilter = names.filter((e) => {
  return e.startsWith("s");
});
console.log(addfilter);
console.log('####--------')
let addfilters = number.filter((e) => {
  return e % 2 === 0 ? true : false;
});
console.log(addfilters);

let sum = "ali alisawil lebt im stadt Bagdad";

let res = sum
  .split(" ")
  .filter((e) => {
    return e.length >= 3;
  })
  .join(" ");

console.log(res);

console.log('##############------------------------------> One');
let con = "123Alisawi22";
let ignor = con
  .split("")
  .filter((e) => {
    return isNaN(parseInt(e));
  })
  .join("");
console.log(ignor);

console.log('##############--Mixing--> Two');

let mix = "128Imad3";

let mixContent = mix.split("").filter((e)=>{
  return !isNaN(parseInt(e))
}).map((w)=>{
  return w * w
})
.join("")
console.log(mixContent)

let mixedArray = [1, 2.5, "hello", 6, 0.8, 8, "world", 10];
function filterIntegers(arr) {
  // write your code here
  return arr.filter(Number.isInteger);

}
console.log(2, filterIntegers(mixedArray));
console.log('#####')

let mixedArrays = [1, 2.5, "hello", 6, 0.8, 8, "world", 10]
let rest = mixedArrays.filter((e)=>{
  return  !isNaN((e))
  
})
console.log(rest)