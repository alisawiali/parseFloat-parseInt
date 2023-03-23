
/*
Loop
-- Lopp On Sequences

*/ 

let myFreind = [1,"Imad","Omer","Alaa",2,3,"Amer","Ali"];

let onlyName = ["Rmadan"];




for(let i = 0; i < myFreind.length ; i++){
  if(typeof myFreind[i] === "string"){
    onlyName.push(myFreind[i])
  }else if (typeof myFreind[i] !== "number"){
    onlyName.shift(myFreind[i])
  }
}

console.log(onlyName)