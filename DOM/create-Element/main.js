for (let i = 0; i < 5; i++) {
  let myDiv = document.createElement("div");
  const myHThree = document.createElement("h2");
  const myP = document.createElement("p");

  // ClassList Product
  myDiv.classList = "Product";

  // Text
  myHThree.textContent = "Product Name " + [i];
  myP.textContent = "Product Price" + [i];
  myDiv.appendChild(myHThree);
  myDiv.appendChild(myP);
  myDiv.style.backgroundColor = "red";
  myDiv.style.color = "white";
  myDiv.style.padding = "10px";
  myDiv.style.margin = "10px 20px";
  document.body.appendChild(myDiv);
}

let mybtn = document.createElement("button");
mybtn.textContent = "Click Me";
mybtn.style.backgroundColor = "red";
mybtn.style.color = "white";
mybtn.onclick = function () {
  console.log("Button Clicked");
};
document.body.appendChild(mybtn);
