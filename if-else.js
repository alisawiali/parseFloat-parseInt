let price = 100;
discount = false; // تخفيض
let discountAmount = 30; // مقدار الخصم
let country = "Iraq";
let student = true;
let age = 20;




if (discount === true) {
    price -= discountAmount;
} else if (country === "Iraq") {

    if (student === true) {
        price -= discountAmount - 10;
        if (age >= 18) {
            price -= discountAmount - 10;
        }
    } else {
        price -= discountAmount + 20;
    }

} else {
    price = 100;
}

console.log(price)

console.log('age', age ?? 100)

//--------------------
console.log("<----------------Chalang----------------->")
let job = "Manger";
let salary ;

switch (job) {
    case "Manger":
    salary = 1000;
    console.log(`salary Is ==> ${salary}`);
    break;
    case "IT":
    salary = 2000;
    console.log(`salary Is ==> ${salary}`);
    break;
    default:
        salary = 1000;
        console.log(`ich bin mit dem ${salary} und als Verkäüfer zufriden`)
}

if(job === "Mantor"){
   salary = 6000;
    console.log(`Manger bin ich und  mein  ${salary} $`)
}else if(job === "IT" || job === "Schneider"){
    salary = 1000;
    console.log(`Ich bin It Manger und mein ${salary} $`);

}else if(job === "chefreise" || job === "Taxifahre"){
    salary = 3000;
    console.log(`ich bin Taxifahrer und mein ${salary} $`)
}