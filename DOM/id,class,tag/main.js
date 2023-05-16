console.clear();
/*
 - - [1]: document.getElementById
    - - [2]: document.getElementsByClassName
        - - [3]: document.getElementsByTagName
        - - [4]: document.querySelectorAll()

*/
// let myTest = document.getElementById("test");
// myTest.innerHTML = "Einen schönen guten Morgen"; // Change The Text

const myclass = document.getElementsByClassName("main");
console.log(myclass.length);

const myDiv = document.getElementsByTagName("div");
myDiv[1].innerHTML = "Chnaged by Javascript";
console.log(myDiv);

const mySel = document.querySelectorAll("p.test");
mySel[0].innerHTML = "Einen schönen guten Morgen ....";
console.log(mySel);
