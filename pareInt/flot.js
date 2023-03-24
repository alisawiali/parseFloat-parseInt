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
let calc = 6;

document.write(`<h1>The best ${calc} Product</h1>`)
for (let i = 0; i < calc; i++) {
    document.write(`<div> `);
    document.write(`<h3>${[i + 1]} :${prod[i ]}</h3>`)
    document.write(`<hr>`);
   for(let h = 0; h < colors.length; h++){
    document.write(`<p> ${colors[h]}</p>`)
   }
    document.write(`</h3>`);


}