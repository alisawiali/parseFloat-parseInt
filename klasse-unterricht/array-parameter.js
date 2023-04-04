

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
greetALL('Guten Morgen','Imad','Ali')


let namens = ['Alisawi','Alia','Marianne'];
//                     Spread Parameter
 greetALL('Guten Morgen',...namens)

 console.log("##########----------------->");
 console.log()

 const peopFrüh = ['Markus','Ahmed','Maxim'];
 const peopleLetter = ['Paul','Peter'];
 const allPeopel = [...peopFrüh,...peopleLetter]

 console.log(` Heute sind die Leute ${allPeopel} anwesend`);

 console.log('--push()  --->')
 const test = ["Imaaaad"];
 test.push(...allPeopel)
 console.log(test)