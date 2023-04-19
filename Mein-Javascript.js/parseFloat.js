

let z = 10;
let x = "22";
let r = true;
let as = parseInt(10.1);
console.log(as) 
console.log(++z + +x++ + r + +z++ )


// e zahl _________________________________________
let c = 2e3
console.log(c.toFixed(2)) // 2000,00

console.log(Number.MAX_SAFE_INTEGER); //zahl
console.log(Number.MAX_VALUE); //  größte sicher zahl
console.log(Number.MIN_SAFE_INTEGER); // der kleinste sicher zhal




// ToString()----------------------------------------------------------->
console.log("<-----------toString------------------>")
const e = 100;
console.log(e.toString())

if(e !== isNaN()){
    console.log("hallo word ")
}else(
    console.log("is not IsNaN ")
)

//  IsInteger-------------------->

let run = 100;
if(Number.isInteger(run)){
    console.log(`${run}:  yes it is isInteger`)

}else{
    console.log('im sorry ')
}
// 





// isNaN
const raw = "hi2";
const main = "12";
const somer = "imad";
const Winter = 32.23333;

console.log('Raw Result', isNaN(raw)) // treu
console.log('Main Result', isNaN(main)) // false
console.log('Result Sommer',isNaN(somer)) // treu
console.log('Result Winter',isNaN(Winter)); // false



//_______________________________//
let w = 12345.86;
console.log(typeof w)
console.log(w.toFixed(2))
console.log(isNaN(parseFloat(w)))


let rr = "ha";
console.log(isNaN(rr)? true:false);