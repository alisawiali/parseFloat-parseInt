/*
--Loop Methode
..Do While--->           Nimmt das Erste Befehl egal was....

*/

let myText = ["Buch","Auto","schrank","Hous"];

let i = 0;
do{
    console.log(myText[i])
    i++;
    if(myText[i] ===  "schrank"){
        break;
    }
}while( i < myText.length)
console.log(myText[i])