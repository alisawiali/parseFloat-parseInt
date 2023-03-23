
/*
Array Methode
.. slice
..splice
*/ 

//         slice    0        1         2       3
//         slice   -4       -3        -2      -1
let myFrindHome = ["Omer","Amer","Imad","Alla"];
myFrindHome[0] = "Alisawi";
console.log('slice Methode',myFrindHome);
console.log('slice Methode',myFrindHome.slice(1));
console.log('slice Methode',myFrindHome.slice(1,3)); // 1 ,2 (3 X) nimmt das leste nicht an
console.log('slice Methode',myFrindHome.slice(-2));//'Imad', 'Alla' 
console.log('slice Methode',myFrindHome.slice(1,-1)); // Amer Imad


console.log("Splice ---------------------------->")
//           Anfängt,
//            Platzt,Zahl,fügen
myFrindHome.splice(3,1,"Bitar","Sayed")
console.log(myFrindHome)
// 




// Challenge Array
let zero = 0;
let counter = 3;
let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Amer"];

let reves = my.reverse();
console.log(reves.slice(--counter)) // ["Osama","Elham","Mazero","Ahmed"]
++counter;
++zero;
console.log(reves.slice(counter, ++counter + zero))

let nameZ = my.unshift("Elzero");
console.log(my.slice(0,zero));


let r = my[++counter,counter][--counter];
let o = my[++counter,counter][counter].toUpperCase();
let ao = r+o;
let fo = my.unshift(ao);
 console.log(my.slice(--zero,++zero));

