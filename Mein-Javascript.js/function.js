/*
Function Advanced Examples
*/

function sayHallo(userName,age){
    if(age <= 20){
        console.log("You are sommal und plaece the Abb up 18 jahres")
    }else if(age <= 20){
       console.log(` hallo  your Age is ${age}`)
    }else{
        console.log(` hallo ${userName} your Age is ${age}`)
    }
}
sayHallo("Omer",20);
sayHallo("Alid",13)
sayHallo("Imad",33);
// -----------------------------
console.log("---------- #058 - Function Advanced Examples-----------")

function generatYears(start,end,stop){
    for(let i = start; i <= end;i++){
        if(i === 1990){
         continue;
        }
        console.log(i)
    }
}

generatYears(1986,1992,1990)