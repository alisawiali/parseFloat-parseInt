/*
 --- Function
 .. Return 
 .. Automatic Semicolon Insertion [ No line Terminator Allowd ]
 .. Interruptting   =>  المقاطعة

*/


function sayHi(start, end) {
    for (let i = start; i < end; i++) {
        if (i === 4) {
            return 'Interruptting '
        } console.log(i)
    }
}
sayHi(1, 15)
// -----Function Default Parameters ---->
console.log("<----------------------------------Function Default Parameters-->")
function hallo(name, lebe, age = "Unkonwn") {
    // if(age === undefined){
    //  age = "Oknonw";
    // }
    // age = age || "Onknow";
    return `Hallo I'm ${name}  and I lave ${lebe} and my age is ${age}`;
}
console.log(hallo("Imad", "In Deutschland"));


//-----Function Rest Parameters ----------------->
console.log("-----------------------------------Function Rest Parameters ----[Array(Argoment])-->")



function calc(...nambers) {
    //console.log(Array.isArray(nambers));
    let result = 10;

    for (let i = 0; i < nambers.length; i++) {
        result += nambers[i] // result = result + nambers[i]
    }
    return `${result}`;
}
console.log(calc(1, 2, 3)) // 10 +1 + 2 + 3 = 16;
//-----------------------Function Practic  ----------------->
console.log("-----------------------------------Function Ultimate Practic-->")

function mainOne(one1,one2){
    return one1 + one2
}
console.log(mainOne(1,2))
//----------------------Anonymous Function---------
const mark = function (one1,one2){
    return one1 + one2
}

console.log(mark(1,2))