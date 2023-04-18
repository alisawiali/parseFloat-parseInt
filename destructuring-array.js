

console.clear()
let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Imad", "Ahmed", "Ali", "Amer"];
let i = ([a, b, d, d, e = "Omer"] = myFriends);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log('<---- zweite beispiel-------->')
let  [x,y, ,w] = myFriends;
//    0,1,2,3
console.log(x) // Imad
console.log(y) // Ahmed
console.log(w) // Amer


