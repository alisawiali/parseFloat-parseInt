console.clear();
let laptop = {
  size: 32 + "",
  model: 2022,
  hertelle: "opel",
  promAnthername: 2,
};
laptop["große"] = 700 + " gB";
laptop["herstelle"] = "Mackbook";

console.table(laptop);

const result = laptop.model + laptop.promAnthername;
console.log(result);

console.log("Zugrif auf Object Eigenschaften ------------>");

let outObject = {
  names: "Imad",
  große: 175,
  laptop: laptop,
};
console.table(outObject);

console.log("Zugrif auf Object Eigenschaften Verschachtel------------>");

let resultO = outObject.große + outObject.names;
console.log(resultO);

console.log(
  "#############################-------------Array Konrol----------------------->"
);

let myFunc = (shopLadenArray) => {
  if (!Array.isArray(shopLadenArray)) {
    console.log("Parameter shopLadenArray is not an Array ");
    return;
  } else if (shopLadenArray.length <= 0) {
    console.log("Parameter shopLadenArray is has on content  Array ");
    return;
  }
  let result = 0;
  console.log(shopLadenArray.length);
  for (let i = 0; i < shopLadenArray.length; i++) {
    result += shopLadenArray[i];
  }
  return result;
};
console.log(myFunc([20]));
