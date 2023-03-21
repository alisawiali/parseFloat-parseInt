
/* 
String Methode
--> Index
--> chartAt()
--> length
--> trim()
--> toUpperCase
--> toLowerCase

*/ 
// Index[];
console.log("<------Index()------>")
const theLastname = "Almansuri";
console.log(theLastname[1].toUpperCase())


// substring() und Trim()
console.log("<---substring()--Trim()--toUpperCase()---->")
let test = "javaScript";
console.log(test.substring(4,10))// sunche nach dem Word
// -----
const thename = " Alisawi ";
const imad = "Ali"
console.log(thename.trim().substring(0,3).toUpperCase())

//---------------------------------------------------->


console.log("<---------------String methode--------->");


let sub = "Schule"; 
if(sub.length <= 6){
    console.log(`Unterricht fängt um 10:00 an bei der ${sub} an`,sub.substring(4,5)) // l 
}else{
    console.log("leider nicht")
}
console.log(sub.substring(sub.length -6)); // e -1 //  -6 Schule
console.log(sub.substring(sub.length -5,sub.length -3)); // ul  ,weil das ende nicht gezielt wird
console.log(sub.substring(5)); // e
//---------------Includes (True/false)-----------
console.log(sub.includes("a")); // false
console.log(sub.includes("S")); // true


//-------------------------->
console.log("endsWith wenn das fängt oder end sich richtig trift(treu)oder (false)")
// od den stazt ende mit s (treu / false);
//Schule
console.log(sub.startsWith("S")); //  treu
console.log(sub.startsWith("ch",1)); // treu => fängt mit  2 ch 
console.log(sub.endsWith("s")); //  false
console.log(sub.endsWith("e")); // treu
