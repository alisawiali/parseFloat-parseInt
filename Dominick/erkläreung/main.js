//  Erstellt eine opject mit Buchstaben von a bis z in Dentusch/ Englisch
console.clear();
const alphabet = [
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
//  function erstllen und eine parameter (b)
function cerateChiffer(shift) {
  // rettrun g mit
  return {
    encord(plainText) {
      //   Variable lowerCaseCharactersList erstllen und das solllte toLowerCase() Durch lesen und split gibt arr zurück
      const lowerCaseCharactersList = plainText.toLowerCase().split("");
      // map function
      const endcoedCharacter = lowerCaseCharactersList.map((chararter) => {
        const position = alphabet.indexOf(chararter);
        //  Alte Position berechnern anhand des "shift"
        if (position < 0) return "-";
        return alphabet[(position + shift) % alphabet.length];
      });

      const j = endcoedCharacter.join("");
      return j; // string ausgeben
    },

    decord(encordText) {
      return encordText
        .toLowerCase()
        .split("")
        .map((e) => {
          const position = alphabet.indexOf(e);
          if (position < 0) return "-";
          //  Alte Position berechnern anhand des "shift"
          return alphabet[
            (position + (alphabet.length - (shift % alphabet.length))) %
              alphabet.length
          ];
        })
        .join("");
    },
  };
}

const chiffer = cerateChiffer(2); //
const endcodText = chiffer.encord("Was macht dieser Code?");
// const endcodText = chiffer.shift("abcdef");
const decordText = chiffer.decord(endcodText);

console.log({ endcodText, decordText });
