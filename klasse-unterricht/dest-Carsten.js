// DESCTRUCTURING

// eigenschaften und werte an variablen zuweisen
// arrays
console.clear()
const aValue = [1, "two", "three"];
const [one, two, three] = aValue;
console.log(aValue, one, two, three);

const bValue = ["one", 2, "three"];
const [o, , t] = bValue;
console.log(o, t);

const [x1 = "1", x2 = "2", x3 = "3", x4 = "default 4"] = aValue;
console.log("array with default:", x1, x2, x3, x4);

// objects
const oValue = {
  prop1: "prop1",
  prop2: "prop2",
  a: "a",
  b: "b",
};

const { prop1, prop2 } = oValue;
console.log("object props:", prop1, prop2);

// eigenschaften umbenennen
const { prop1: username, prop2: password } = oValue;
console.log("renamed props:", username, password);

// default values für eigenschaften
const {
  prop1: brand = "xyz",
  prop2: color = "black",
  prop3: size = 45,
} = oValue;
console.log("renamed with default props:", brand, color, size);

// strings
const strValue = "hey";
const [lH, lE, lY] = strValue;
console.log("string letters:", lH, lE, lY);

// parameter einer funktion
let user = {
  username: "Icke",
  password: "password",
  o: { ref: "by ref" },
};

let printUsername = ({ username }) => console.log("username is", username);
printUsername(user);

// mit umbenannter eigenschaft
let printName = ({ username: name }) => console.log("name is", name);
printName(user);

// mit umbenannter eigenschaft und default value
let printDefault = ({ status = "active" } = {}) =>
  console.log("default status is", status);
printDefault();
printDefault(user);

// in einer funktion
function f(user) {
  let { username, o } = user;
  username = "changed";
  o.ref = "changed";
  console.log("inside function", username);
}
f(user);
console.log(user);

user = {
  username: "Icke",
  password: "password",
  o: { ref: "by ref" },
};

// einfaches nesting (verschachtelung)
function f1({ username, o: { ref } }) {
  console.log("simple nesting", username, ref);
}
f1(user);

// same as
function f1AltDesctructuring(user) {
  const username = user.username;
  const ref = user.o.ref;
  console.log("alt destructuring simple nesting", username, ref);
}
f1AltDesctructuring(user);

// in einer funktion oder im paramter
function f2({ username, o: { ref2: status = "default status" } = {} } = {}) {
  console.log("nested destructuring", username, status);
}
f2();
f2(user);

// REST PARAMETER
const obj = { a: "prop a", b: "prop b", c: "prop c" };
const { a, b, c } = obj;
// same as
// const a = obj.a;
// const b = obj.b;
// const c = obj.c;
console.log(a, b + c, c[0], c.indexOf("c"));

const userObj = {
  username: "icke",
  password: "pass",
  status: "active",
  avartarUrl: "./avatar.jpg",
  o: { copyOrRef: "ref" },
};

// rest parameter innerhalb destructuring

const { username: userName, ...hiddenObjectProperties } = userObj;
hiddenObjectProperties.password = "changed";
hiddenObjectProperties.o.copyOrRef = "changed";
console.log("user original", userObj);
console.log("hidden object", userName, hiddenObjectProperties);

const arr = ["index0", "index1", 1, 2, 3];
const [index0, index1, , x, y] = arr;
console.log(index0, index1, x + y);

const [, i1, , ...restArrayValues] = ["index0", "index1", 1, 2, 3];
console.log(i1, restArrayValues);

// rest parameter als funktionsparameter
function restParam({ username, ...restProps }) {
  console.log(username, restProps);
}

restParam(userObj);
