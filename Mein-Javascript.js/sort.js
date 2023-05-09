//Sort in decreasing order
//1
console.clear()
let arr = [5, 2, 1, -10, 8];
arr.sort((ele1,ele2)=>{
    return ele2 - ele1
})
console.log(arr);

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

//2
//We can use slice() to make a copy and run the sort on it:

let array = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
   
    return  arr.slice().sort()
    // Die slice()-Methode ohne Argumente erstellt eine Kopie des gesamten Arrays
}

let sorted = copySorted(array);

console.log(sorted);
console.log(array);

let trees = new Array("Kokospalme", "Rotbuch", "Tanne", "Birke", "Ahornbaum");

function len(a, b) {
   let sort = (a.length < b.length) ? -1 : (b.length < a.length) ? 1 : 0;
   return sort;
}

trees.sort(len);
console.log(trees)  