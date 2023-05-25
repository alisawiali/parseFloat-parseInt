const mybtn = document.querySelector("button");
console.log(mybtn);

mybtn.addEventListener("click", () => {
  const myMain = document.createElement("div");
  myMain.innerHTML = "Hello World";
  myMain.id = "myMain";
  myMain.style.backgroundColor = "red";
  myMain.style.color = "white";
  myMain.style.padding = "20px";
  myMain.style.border = "1px solid black";
  myMain.style.margin = "10px";
  myMain.style.width = "200px";
  myMain.style.border = "none";
  myMain.style.borderRadius = "10px";
  document.body.appendChild(myMain);
});
// Onclcik
const btn = document.getElementById("btn");
btn.onclick = function () {
  btn.style.color = "red";
  for (let i = 0; i < 3; i++) {
    const myDiv = document.createElement("div");
    myDiv.textContent = "Hallo welt Onclcik" + " " + [i];

    document.body.appendChild(myDiv);
  }
};

// onmouseenter

const myOnmous = document.getElementById("onmous");
myOnmous.onmouseenter = function () {
  myOnmous.style.backgroundColor = "red";
  myOnmous.style.border = "none";
  myOnmous.style.padding = "10px";
};

// onmouseleave
const myLeave = document.getElementById("onmousleave");

myLeave.onmouseleave = function () {
  myLeave.style.backgroundColor = "white";
  myLeave.style.border = "5px solid black";
  //   myLeave.appendChild(btn);
};

// onFoucs
// onblur
const myMain = document.getElementById("main");
const myInput = document.getElementById("input");
const myNot = document.getElementById("notig");

myInput.onfocus = function () {
  myNot.textContent = "Pleace Write Yours Nmae and Your Password";
};

myInput.onblur = function () {
  myNot.textContent = "";
  if (myInput.value.length < 10) {
    myNot.textContent = "Sorry Yours Passwort is nocht richt ";
  }
};

// onsubmit
const myTestInput = document.getElementById("test");
const mySub = document.getElementById("sub");

myTestInput.onsubmit = function (e) {
  e.preventDefault();
};

//oncontextmenu
const myClick = document.getElementById("click");
console.log(myClick);
myClick.oncontextmenu = function (e) {
  e.preventDefault();
  myNot.textContent = "Schreibe";
};

// onkeyup
const myonKey = document.getElementById("OnkeyUp");
document.body.appendChild(myNot);
myonKey.onkeyup = function () {
  myNot.textContent = myonKey.value;
};
