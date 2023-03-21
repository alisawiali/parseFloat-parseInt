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
        if(age >= 18){
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
let i = "Alisawi";

console.log(i.indexOf("i")? "Good": "not gooot")