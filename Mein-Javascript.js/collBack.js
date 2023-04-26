
console.clear()
let myArrayNames = ["Imad", "Alla", "Amer", "Ali", "Mari"];

let emptyArra = [];
function myFrindes(callback) {
  setTimeout(() => {
    emptyArra.push(...myArrayNames);

    console.log(emptyArra);
    callback(emptyArra, "Imad");
  }, 0);
}

function findEmplyByName(emply, name) {
  const findmap = emply.find((x) => x === name);
  {
    if (findmap) {
      console.log(findmap);
    } else {
      console.log("Not Found");
    }
  }
}
myFrindes(findEmplyByName);