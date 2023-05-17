const myMainBtn = document.getElementById("main");
const myPowerBtn = document.getElementById("power");

myMainBtn.onclick = function () {
  document.getElementById("monster1").style.color = "red";
};

myPowerBtn.onclick = function () {
  myMainBtn.addEventListener("click", function () {
    document.getElementById("monster2").style.color = "blue";
    const testcereat = document.createElement("h1");
    const myText = document.createTextNode("Hallo Welt in Javascript");
    testcereat.appendChild(myText);

    document.body.appendChild(testcereat);
  });
};
// Ich müsse zusert  die Event myPowerBtn clicken, damit myMainBtn functinret
