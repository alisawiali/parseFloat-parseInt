/*  // Destructuring

*/
console.clear();
// Eigenschaften und werte an Variablen zuweisen
// Arrays

console.log("// Arrays  ------------>");
const aValue = [1, "tow", "Three"];
const [one, tow, three] = aValue;
console.log(one, tow, three, aValue);
console.log(one, tow, three);

console.log();
// Object
console.log("// Object  ---------->");
const tValue = {
  prop1: "Berlin ",
  prop2: "Brandenburg",
};

const { prop1, prop2 } = tValue;
console.log(prop1, prop2);

console.log();
console.log("// Eigenschaften umzubenenen  ---------->");
// Eigenschaften umzubenenen
const { prop1: user, prop2: password } = tValue;
console.log("Eigenschaften umzubenenen:  ", user, password);

// default values für eigenschaften
const {
  prop1: brand = "Nicke",
  prop2: color = "White",
  prop3: size = 43,
} = tValue;
console.log("renamed with default props. ", brand, color, size);

// parameter function
console.log("parameter function------------>");
let myUser = {
  userName: "Imad",
  lastName: "Alisawi",
  job: {
    beruf: "IT",
  },
};
let myFunc = ({ userName }) => console.log(userName);
myFunc(myUser);

console.log();
console.log("//mit umbenannter eigenschafte -------->");
//mit umbenannter eigenschafte

// in einfach function
myUser = {
    userName: "Imad",
    lastName: "Alisawi",
    job: {
      beruf: "IT",
    },
  };
  function testOne({ userName,lastName, job: { beruf } }) {
    console.log("simple nesting =>", userName,lastName, beruf);
  }
  testOne(myUser);
  

