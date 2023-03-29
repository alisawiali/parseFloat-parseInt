
// const rawPrice = Number(prompt("Enter the raw price:"));
// // VAT rate = 20.6%
// const vatRate = 20.6 / 100;
// const finalPrice = rawPrice * (1 + vatRate);
// console.log(`The final price is ${finalPrice}`);


// oder
// let price = prompt("inter your Price")
// console.log(( price * 1.206 ))



let names = [
    ["Imad", 32],
    ["Omer", 30],
    ["Ali", 40],

]

for (let x = 0; x < names.length; x++) {
    //   ["Imad",32]
    let person = names[x]
    console.log(person[0] + 'ist  ' + person[1] + ' jahre alt ');
    for (let i = 0; i <= 2; i++) {
        console.log(person[0] + ' wird in  ' + i + ' jahren ' + person[1] + ' sein')
    }

}
// Mittowch /9/3/2023------------------------------------>
console.log('Mittowch /9/3/2023--->')


function one(x){
    const result = x * x;
   console.log(result) 
}

one(2)

for(let i =0;i < 3;i++){
    one[i]
}