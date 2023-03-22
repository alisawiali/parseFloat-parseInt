/*
Array
..Create Array [Tow Mothode ] New Array() + []
.. Access Array Element
..Nested Araay
..Change Array Elements
..Check For Array Array .isArray(arr) 
*/





let arrayOne = ["Ahemd", "Omer", "Imad",["Alaa","Ali"]];
console.log(`Hallo. ${arrayOne}`);
console.log(`Hallo. ${arrayOne[1]}`);
//                          index.index
console.log(`index in der Array (Nestet) ${arrayOne[1][2]}`);
// Nestet Array ---->
console.log(`index Buchstaben. ${arrayOne[3][1][2]}`);


// ..Change Array Elements
console.log("<-----..Change Array Elements--->")
console.log(arrayOne)
arrayOne[0]= "Marianne";
console.log(arrayOne)
arrayOne[3] = ["Imad","Ali","Alisawi"]
console.log(arrayOne);


//..Check For Array Array .isArray(arr)
console.log(Array.isArray(arrayOne));// treu.
/*
length
*/
arrayOne.length = 2; // hier nemmen wir wie viel wir haben wollen
console.log(arrayOne)
