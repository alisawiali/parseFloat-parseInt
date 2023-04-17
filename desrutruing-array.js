/*
 -- Desruturcturing 
  ---- Desruturcturing Array Advanced Examples 
*/
console.clear();
let myFriends = [
  "Imad",
  "Ali",
  "Jasem",
  "Abd",
  ["Alla", "Mirem", ["Ahemd", "Amer"]],
];

let [, , , , [, , [a, b]]] = myFriends;
console.log(a);
console.log(b);

//console.log(myFriends[4][2][1])

