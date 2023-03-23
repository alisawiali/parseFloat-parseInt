/*
----Loop Control
-- Brack
-- Contraol
--Label
*/

let myProducts = ["BWM", "WW", "MRSDS", "Opel", "Nesan"];
let color = ["Wetit", "Red", "Black"];


// wenn wir die (String / Number) nicht mehr haben wollen nutzen wir (Typeof +continue; );
// wenn wir mit den loop hauptsachen spielen wollen denn benutzen wir(mainloop); and bei der zweite loop(nestedloop:)
mainloop: for (let i = 0; i < myProducts.length; i++) {
    console.log(myProducts[i])
    nestedloop: for (let k = 0; k < color.length; k++) {
        console.log(`Color ${color[k]}`)
        if(color[k] === "Red"){
            break ;//<= mainloop; stopt den Hauploop , wenn bei Red ankommt
        }
    }
}