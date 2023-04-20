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
function testOne({ userName, job: { beruf } }) {
  console.log("simple nesting =>", userName, beruf);
}
testOne(myUser);

console.log();
console.log("--------------------------------");
const { a, b, c } = { a: "One A", b: "Tow B", c: "Three c" };
console.log(a, b + a, c[0], c.indexOf("c"));

const useObject = {
  username: "Test",
  password: "pass",
  status: "active",
  avartarUrl: "/avatar.jgp",
  o: {
    copyOrRef: "Testing",
  },
};
//                            ...rest
const { username: userNams, ...hiddensRest } = useObject;
hiddensRest.password = "chanllge";


console.log(useObject);
console.log('ergebnis', hiddensRest);
