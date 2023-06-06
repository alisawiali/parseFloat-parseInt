console.clear();
const a = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const b = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

function tarnslate(text) {
  let result = "";

  for (let f = 0; f < text.length; f++) {
    const letter = text[f];

    const head = a.indexOf(letter);

    if (head < 0) {
      result += "   ";
      continue;
    }

    const morsLetter = b[head];
    result += " " + morsLetter;
  }

  return result;
}
console.log(tarnslate("was passiert eigentlich hier"));
