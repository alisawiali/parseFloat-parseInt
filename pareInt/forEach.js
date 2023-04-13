/*
- - - - forEach macht kein Araay 
 . . . # # # # #  Syntax forEach (callaBackFunction (Element , Index, Array){} ,thisAry)
 . . . => Element => The current element being processed in the Araary.
 . . . => Index => The index of the current element being processed in the array 
 . . . => Array =>  The current Array 

  ######  Note 
  ---- Doesnt Return Anthing [Undefiend]
  ---- Brack will not Breack The Loop


 */
console.clear();
console.log("####");

let allList = document.querySelectorAll("ul li");

allList.forEach((ele) => {
  ele.onclick = function () {
    allList.forEach((element) => {
      element.classList.remove("active");
    });
    ele.classList.add("active");
    allList.forEach((ele) => {
      ele.style.display = "none";
    });
  };
});
