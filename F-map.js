

/*
-- Function Map
*/

let myfrinds = ["Omer", "Amer", "Alaa", "Imad"];

let myNumer = [1, 2, 3, 4, 5];
let newArray = [];


for (let i = 0; i < myNumer.length; i++) {
    newArray.push(myNumer[i])
}
 console.log(newArray)

 console.log('-----Map----')
let addself =myNumer.map((e)=>{
    e + newArray
   return e
})
console.log(addself)