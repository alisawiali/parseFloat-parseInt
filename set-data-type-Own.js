/*
-----  Set Data Type
  Syntax: new Set (Iterable)

  Object To Stroe Unique Value
  Cannont Access Elements By Index

  ### Properties:
  --Size

 ### Mehtode:
  -- add
  -- deslete
  -- clear
  -- has

*/
console.clear();
console.log("------------  add --------------");
let myData = [1, 1, 1, 2, 3, 4, 1,"A"];
let myUnique = new Set(myData);
//let myUnique = new Set(myData).add(33).add(12) // wenn etw zufügen wollen mit add()

console.log(myUnique); // 1,2,3,4
console.log(myUnique.size); // 4

console.log(myData[3]); // hier können index benutzen aber beim (myUnique) wird undifain geben

console.log("##########");
myUnique.add(22).add(5);
console.log(myUnique);

console.log("------------  delete --------------");

console.log(myUnique.delete(5)); // die NUmber ist hier und gibt uns (True);
myUnique.delete(5); // hier löscht Number 5
console.log(myUnique);
console.log(myUnique.size);
console.log("------------  clear Löscht alles --------------");
console.log("------------  has [treu, false]--------------");


console.log(myUnique.has("a".toUpperCase())) // includes
