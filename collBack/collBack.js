




function myFun(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");

p.addEventListener("click", myFun);


//--------------------------------

function testing(){
    document.getElementById('imad').style.color = "red";
}

function changeText(){
    for (let index = 1; index <= 20; index++) {
        let x = 0
        document.getElementById('imad').innerHTML += x + index;
        
    }
}
 function saeHallo(){
    document.getElementById('imad').style.color = "red";
 }
 function change(y,x){
    y();
    x();
}
change(changeText,saeHallo)