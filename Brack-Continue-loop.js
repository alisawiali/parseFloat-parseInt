/*
----Loop Control
-- Brack
-- Contraol
--Label
*/


let myProducts = ["BWM", "WW", "MRSDS", "Opel", "Nesan"];
let color = ["Wetit", "Red", "Black"];


// wenn wir die (String / Number) nicht mehr haben wollen nutzen wir (Typeof (String / Number) +continue; );
// wenn wir mit den loop hauptsachen spielen wollen denn benutzen wir(mainloop); and bei der zweite loop(nestedloop:)
mainloop: for (let i = 0; i < myProducts.length; i++) {
    console.log(myProducts[i])
    nestedloop: for (let k = 0; k < color.length; k++) {
        console.log(`Color ${color[k]}`)
        if (color[k] === "Red") {
            break;//<= mainloop; stopt den Hauploop , wenn bei Red ankommt
        }
    }
}


// loop Advances Example  (====>   Advanced Loop)
console.log("<-------------// loop Advances Example--------------->")
let myLoopFreinds = ["Imad", "Amer", "Alla","Ali"];

function x() {
    let i = 0;
    for (; ;) {
        let r = " Ahmed "
        if(r === ""){
            console.log(myLoopFreinds[i].concat(r).toLowerCase())
        }else{
            console.log(myLoopFreinds[i].concat(r).toUpperCase())
        }

        i++;
        if (i === myLoopFreinds.length) break;
    }
}
x()


let z = ["Imad"," Alla","Ahud", "Amer","Ali","MArianne"];
let colors = ["red","Black","green"]
let f = 4;

document.write('<h1>The best </h1>')
for(let d = 0; d < f.length;d++){
    
}