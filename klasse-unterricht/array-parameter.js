/*
---- -_-- Array Parameter
*/

console.log("##########----------------->");
function gehalt(name = "Omer", salary = 12) {
  return `Es ist Ende des Monats, ${name} und bekommt ${salary * 40 * 4}`; // 12 * 40 * 4  = 1.920
}
console.log(gehalt("Imad"));
console.log(gehalt("Markus", 16));
console.log(gehalt());

console.log("##########----------rest Parameter------->");
function greetALL(gut, ...names) {
  for (let i = 0; i < names.length; i++) {
    let result = names[i];
    console.log(`${gut} ${result}`);
  }
}

greetALL("Guten Morgen", "Andre", "Taher ", "Ahmed", "Alla");
greetALL("Guten Morgen", "Imad", "Ali");

console.log("##########----------------->");
console.log();

const peopFrüh = ["Markus", "Ahmed", "Maxim"];
const peopleLetter = ["Paul", "Peter"];
//                     Spread Parameter
const allPeopel = [...peopFrüh, ...peopleLetter];

console.log(` Heute sind die Leute ${allPeopel} anwesend`);

console.log("--push()  --->");
const test = ["Imaaaad"];
test.push(...allPeopel);
console.log(test);

console.log("##########----------------->");
console.log();

const one = ["Alisawi", "Amer"];
const tow = ["Ali", "Omer"];
const three = ["Alla", "Ahmed"];

const allCast = [...one, ...tow, ...three]; // zusammen
console.log(allCast.length, allCast); // namen und Zahl (6);

console.log("##########----------------->");
console.log();

const testOne = true;
const age = 1.3;

function value() {
  if (testOne === true && typeof age === 'number') {
    // Number.isInteger(age)
    return true;
  }
  return false;
}

console.log("Alles gut", value() ? "ja " : "false");
