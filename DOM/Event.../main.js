const myInput = document.getElementById("input");
const mydiv = document.getElementById("div");
let mybtn = document.getElementById("btn");

//  Onkeyup zeigt  und zeugt was in anders div was man schreibt
myInput.onkeyup = function () {
  mydiv.innerHTML = myInput.value * 109;
};
