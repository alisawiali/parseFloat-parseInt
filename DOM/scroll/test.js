// const myMain = document.getElementById("main");

// myMain.onclick = function () {
//   document.body.scrollTo += 100;
//   console.log(document.body.scrollTo);
//   if (document.body.scrollTo >= 500) {
//     this.classList.add("active");
//   }
// };

// console.log(myMain.clientLeft);
// console.log(myMain.clientTop);

const myMain = document.querySelector(".main");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    myMain.classList.add("active");
    myMain.style.backgroundColor = "gren";
  } else {
    myMain.classList.remove("active");
  }
  // this.scrollY >= 500
  //   ? myMain.classList.add("active")
  //   : myMain.classList.remove("active");
};
myMain.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
