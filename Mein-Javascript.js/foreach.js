/*
- - - - - - - - - -  Chalane Array folge 78-----
*/

let myString = "1,2,3,EE,1,z,e,r,o_W,e,b,_,S,c,h,o,o,1,2,0,t";


let solution = myString.split(",").join("").split("").filter(ele =>{
    return isNaN(parseInt(ele))
}).map((e)=>{
    return e.startsWith("_")? " ": e;
}).slice(1,-1)
.join("")

console.log(solution)


