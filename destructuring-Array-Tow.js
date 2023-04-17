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

const myobject = {
  a: 1,
  b: 2,
};
//       تعريف الملكية
Object.defineProperty(myobject, "c", {
  writable: false,  // schreibbar // auf false ===> قابل للكتابة // ===> في حالة التغيير ، لا يمكن للمستخدم تغييره 
  enumerable: true, //معدود   aufzählbar // wenn das auf false ändern wollen dann wrid es es vom loop nicht anerkennt  (c) nur
  configurable: true, // شكلي konfigurierbar
  value: 3,
});
    myobject.c = 100;

    for(let mains in myobject){
        console.log(mains, myobject[mains])
    }

console.log(myobject)