// let price = '2,50$';
// let product = "Banana";
// const resul = ` ${price}  "\n"  ${product}`;

// console.log(` ${price} ${100 * 2} "\n"  ${product}`)


// // ----------------------------------->
// console.log("---- parseFloat() ------")
// // parseFloat() für 10,2, parseInt() 10;
// //let a = parseFloat(10);
//  let a =parseInt(130.1);
//  console.log(a * 3 )


//  console.log("---- (e)--Number(Max)---->,00------")

//  let mydo =document.querySelectorAll(".h1");
// console.log(mydo)



let prod = ["Imad", " Alla", "Ahud", "Amer", "Ali", "MArianne"];
let colors = ["red", "Black", "green"]
let text = "The Admin For Team I is";
let calc = 6;
nas = ["imad","Ali"]

document.write(`<h1>The best ${calc} Product</h1>`)
for (let i = 0; i < calc; i++) {
    
    document.write(`<h2>${i +1} ${text } <hr></h2>`)
    document.write(`<div> `);

    document.write(`<h3>${[i + 1]} :${prod[i ]}</h3>`)

   for(let h = 0; h < colors.length; h++){
    document.write(`<p> ${colors[h]}</p>`)
   }
    document.write(`</h3>`);
}


console.log("-----------------------------------Function Ultimate Practic-->")

// function halloImad(User = "Un", age = "Un", wohnt = "", gehalt = 0, show = "Yes", ...skills) {

//     // let main = document.createElement("div")

//     document.write(`<div>`)
//     document.write(`<h2>Welcome, ${User}</h2>`)
//     document.write(`<p>Ich bin , ${age} jahre alt</p>`)
//     document.write(`<h5>Ich lebe in ${wohnt}</h5>`)
//     document.write(`<p>mein  gehalt ist $${gehalt} im moment</p>`)
//     if (show === "Yes") {
      
//         if (skills.length > 0) {

//             document.write(`<p> Skills : ${skills.join("\n //")}</p>`)
//         } else {
//             document.write(`<p>skllis:  No skllis </p>`)
//         }
//     } else {
//         document.write(`<p> skllis: is hidden</p>`)
//     }

//     document.write(`</div>`)

// }
// halloImad("Imad", 33, "berlin", 20, "Yes", " html ", "Css ", "Js");

//Function-radom-Argument Challenge
//=================================

//Function Teypes For Info Is
//-string => Name
//-Number => 
//-Boolean => Status
// Argument is Random
// Data Is Not Sorted Output Depend On Data rype
// -Use ternary Condation Operator



// shoeData("Osmae",32,true); "Halllo Omsae , Your Age is  38, You Are Available For Hier"
// shoeData(24,"Ahmed",true); "Halllo Omsae , Your Age is  38, You Are Available For Hier"
// shoeData(true,22,"Omer"); "Halllo Omsae , Your Age is  38, You Are Available For Hier"
// shoeData(false,"Mostafe",43); "Halllo Omsae , Your Age is  38, You Are Available For Hier"


// function showDetails(...argument) {
//     let name, age , flag;
//     for (let i = 0; i < argument.length; i++) {
//         if (typeof argument[i] === 'string')
//             name = argument[i];
//         if (Number.isInteger(argument[i]))
//             age = argument[i];
//         if (typeof argument[i] === "boolean")
//             flag = argument[i];
//     }
//     (flag) ? console.log(`Hello ${name}, Youe Age Is ${age}, You Are Available For Hire`) : console.log(`Hello ${name}, Youe Age Is ${age}, You Are Not Available For Hire`);
// }
// showDetails("Osama", 32, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(24, "ahmed", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 33, "ibrahim"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "mostafa", 43); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//-------------------------------
