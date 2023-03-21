
/*
 slice => verlangt Start und End  (Buchstaben )
 WICHTIG 

    // er nimmt die das Ende Nicht Z:B (15 Zahl)
*/ 



let meinNachName = "Alisawi Ali Ahmed";
console.log(meinNachName.slice(0,7)); // Alisawi
console.log(meinNachName.slice(7,11)); // Ali
console.log(meinNachName.slice(12,17)) // Ahemd
console.log(meinNachName.slice(0,2)) // Al 0,1,2



//  wir könne auch mit (-) Arbeiten

console.log(meinNachName.slice(-1)) // d
console.log(meinNachName.slice(-5)) // Ahmed
console.log(meinNachName.slice(-5,-3)) // Ah 
console.log(meinNachName.slice(-9,-5)) // Ali


if(meinNachName.lastIndexOf(0,3) === ""){
    console.log(meinNachName.slice(0,3))
}else{
    console.log("Name nicht gefunden")
}