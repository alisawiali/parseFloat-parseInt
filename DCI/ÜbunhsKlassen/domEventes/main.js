const btnclcik = document.getElementById("btn-clcik");
// --------------   Event ----------------- //
// Hole Refeenz mit dem ID btn clcik

btnclcik.addEventListener("click", (evt) => {
  console.log("button clcik ==> Arrow function");
});

//Mit addEventListener köönen mehrer listner auf deselbe Event rufen

function handleClick(evt) {
  console.log("Exteerne function as refernue");
}
// Die bereits definierte function kann alshanle pre
btnclcik.addEventListener("click", handleClick);

const btnRemove = document.getElementById("btn-remve");
btnRemove.addEventListener("click", (evt) => {
  console.log("Removing second click listner");
  // Entferne den 'click listner vom btunremeove anhand der Refernz des zweiten handle
  btnclcik.removeEventListener("click", handleClick);
});

//

function random(limit) {
  return Math.floor(Math.random() * (limit + 1));
}
const tiles = document.querySelectorAll(".tile");

function handleTileClick(evt) {
  // Das Event Object liefert uns eine Fefernz auf das Element
  // Das das Element ausgeloest hat
  const targetElement = evt.target;
  //  Element neue Zufallfarbe
  const roundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  targetElement.style.backgroundColor = roundColor;
}
//Durchlauf alle geholten kachel-Elemente und redistrier eine 'clcikListner
// mit der oben difinierten Halndle-function als Halnel
tiles.forEach((tile) => tile.addEventListener("clcik", handleTileClick));

// section Tow

const inputSection = document.getElementById("input-section");
const textInput = document.getElementById("input-txt");
const checkbox = document.getElementById("input-checkbox");
const selctInput = document.getElementById("input-select");

// change  ==>  wenn das maose weg nimmt wird angezeigt.....
//              Event - wird hier reagirern, wenn der Fokus
//               des Feld verlasst und sich der wert das Feleds auch verändert
// input   ==> Event - wird sofrt gezeigt was man schreibt
textInput.addEventListener("change", (evt) => {
  console.log(evt.target.value.toUpperCase());
  evt.target.value = evt.target.value.toUpperCase();
});

textInput.addEventListener("input", (evt) => {
  console.log(evt.target.value.toUpperCase());
  evt.target.value = evt.target.value.toUpperCase();
});

//   chaneg Event
checkbox.addEventListener("change", (evt) => {
  console.log(evt.target.checked);
  document.body.classList.toggle("darkmode");
  if (evt.target.checked) {
    const output = document.createElement("p");

    output.textContent = "Ich habe das Checkbox aktiviert";
    inputSection.append(output);
  } else {
    const lastElement = inputSection.children[inputSection.children.length - 1];
    inputSection.remove(lastElement);
  }
});

//
selctInput.addEventListener("change", (evt) => {
  const value = evt.target.value;
  let outpot = inputSection.querySelector("#input-select");
  if (!outpot) {
    outpot = document.createElement("p");
    outpot.id = "input-select";
  }
  outpot.textContent = `Ich habe das Select aktiviert, ich habe jetzt ${value} gewählt`;
  inputSection.append(outpot);
});

//  Formale

const login = document.getElementById("login-form");

login.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const username = evt.target.querySelector("#unsername");
  const passeword = evt.target.querySelector("#passeword");

  // Extrahlirer ersten Buchstabe ,großebuchstabe ist
  //und füge, fehelemeldung sa sammenlarray hinzu
  const firstLetterUser = username.value[0];
  if (firstLetterUser === firstLetterUser.toUpperCase()) {
    console.log("Felehr");
  } else if (passeword.value.length < 5) {
    console.log("Fehler");
  }

  username.value = "";
  passeword.value = "";
});
