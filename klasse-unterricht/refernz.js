console.clear();
function name(p) {
  p.firstNmae = "Imad";
  return p;
}

const t = { firstNmae: "ppp" };
const oRef = name(t);
console.log(t, ":", oRef);

console.log('#########------------');
const main = true;
let test = main;
console.log(main === test);
test = false;
console.log(main === test);

console.log('#########------------');

const arr = [1,2,[3]];
let arrRef = arr;
console.log(arr,':',arrRef) // ===> [ 1, 2, [ 3 ] ] : [ 1, 2, [ 3 ] ]
arrRef[0]= 'one';
console.log(arr,':',arrRef) // ====> [ 'one', 2, [ 3 ] ] : [ 'one', 2, [ 3 ] ]