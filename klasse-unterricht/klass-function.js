// kleinetmöglich definition einer function.

// keword Function -  namen   (parameter)  {code block}
function myName() {
  console.log("hallo welt");
  const res = parseInt(2);
  console.log(res);
}
myName();

//parameter
console.log("-------");
let frust = "mango";
function names(x) {
  let n = x * x;
  if (true) {
    console.log("hi local", x / x);
  }
  console.log(n);
  let frust = "Banana";
  console.log(frust);
}

names(2);
console.log("-------");
function calc(x) {
  console.log(x + x);
  names(x);
  console.log("after nach func", x);
}
calc(3);

console.log("##########----------------->");

function test(one, tow = true) {
  if (!one) {
    return "hallo Unbekannte";
  }
  if (tow) {
    return `guten mogrgen ${one} es ist schön dich zu sehen `;
  }
  return ` guten abend ${one}`;
}

console.log(test("Ahmed", false)); // guten abend Ahmed
console.log(test("omer")); //  guten mogrgen omer es ist schön dich zu sehen
console.log(test()); //  hallo Unbekannte

console.log();

