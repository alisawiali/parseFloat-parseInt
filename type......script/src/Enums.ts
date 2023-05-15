console.clear();
const Kids = 15;
const Adults = 16;
const Children = 17;
const Infants = 18;
const AdultsAndKids = 19;
const AdultsAndChildren = 20;

enum Level1 {
  Kids = 15,
  Adults = 16,
  Children = 17,
  Infants = 18,
  AdultsAndKids = 19,
  AdultsAndChildren = 20,
}

const sum = "Esay";
function result() {
  if (sum === "Esay") {
    console.log(` The Level Is ${sum} And Number is ${Level1.Adults}`);
  }
}
result();
