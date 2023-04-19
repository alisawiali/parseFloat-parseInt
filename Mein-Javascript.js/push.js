/*

Array methode [Adding And REMOVING]
.. unshift("","") Add Element To The First
.. push("","") Add The element To The End
.. shift() Remove First Element Form Array
.. pop() Remove End The eleemnt 

*/

let myFrinds = ["Omer","Alla"," Imad"];
console.log(myFrinds)
console.log("myFrinds ---------------------------->")
console.log("...unshift Add Element To The Firs---------------------------->")
myFrinds.unshift("Amer");
console.log(`unshift Add Element First:==> `,myFrinds)

console.log("....push Add The element To The End ---------------------------->")
myFrinds.push("Marainne");
console.log("...Push  Add The Element To End ",myFrinds);

console.log("... shift() Remove First Element Form Array------------------>")
myFrinds.shift("Amer")
console.log('shift löscht das Erste element',myFrinds);

console.log(".. .pop() Remove End Element Form Array------------------>")
myFrinds.pop();
console.log('Löscht das End  Element ',myFrinds);

//------------------------searchArray----------------------------------------------->
console.log("<-------------searchArray------------------------->")
let searchArray = ["Alisawi","Imad","Omer","Ali","Imad"];
console.log(searchArray.indexOf("Omer"));
console.log(searchArray.indexOf("Imad",2)); // 4
console.log(searchArray.indexOf("Imad",0)); // 1
console.log(searchArray.lastIndexOf("Omer",-1)); // 2 
console.log(searchArray.includes("Imad",-2)); //  treu
console.log(searchArray.includes("Imad"));// treu.