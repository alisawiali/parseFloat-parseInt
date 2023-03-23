
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
