console.clear();
function name(p) {
  p.firstNmae = "Imad";
  return p;
}

const t = { firstNmae: "ppp" };
const oRef = name(t);
console.log(t, ":", oRef);

console.log("#########------------>");
const main = true;
let test = main;
console.log(main === test);
test = false;
console.log(main === test);

console.log("#########-------------------->");

const arr = [1, 2, [3]];
let arrRef = arr;
console.log(arr, ":", arrRef); // ===> [ 1, 2, [ 3 ] ] : [ 1, 2, [ 3 ] ]
arrRef[0] = "one";
console.log(arr, ":", arrRef); // ====> [ 'one', 2, [ 3 ] ] : [ 'one', 2, [ 3 ] ]

console.log("#########--------spread Operator-------->");
// use case - shallow copy arrays and object (nur die eine dimension! die folgenden dimensionen)

let a = [1, 2, "drei", [3, 4]];
const aCopy = [...a].reverse();
a[0] = "eins";
a[3][0] = "dim changed";
aCopy.push("4");
console.log(a, ":", aCopy);
console.log("---------------------------------->");
let o = {
  username: "Imad",
  password: "password",
  product: {
    brand: "Nike",
  },
};
const oCopy = { ...o };
oCopy.username = "Alisawi";
oCopy.product.brand = "Poma";
console.log(o, oCopy);

// 2 use case (concat)  zusammen 
const oStatus = {
  status: "Active",
};

const oUser = { 
    name: "Nike",
    pass:'test',
    ...oStatus,
    ...o
};
console.log(oUser)


// 3. use case -split string into array 
const aString = [...'Hallo welt'].join('/');
console.log(aString)