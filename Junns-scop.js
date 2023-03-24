
// // var /  let / const

let test = "imad";

function sayHallo() {
    if (test === "imad") {
        let custname = "schön, dass du da bist!";
        console.log(custname)
    }
    console.log("mein name is " + test)
}

function sayGoodBay() {
    test = "Ali"
    console.log("bay", test)
}
sayHallo()
sayGoodBay()



//--------------------------------
function one() {
    console.log("hallo welt");
}


function tow() {
    console.log("Hallo Berlin")
}

function main() {
    one()
    tow()
}

main()
console.log("freitag")


// function coun(w){
//     console.log(w);
//     coun(w + 1)
// }
// coun(1)

function m() {
    let xx = ["imad", "Amer", "Alla"];
    xx[0] = "Imad";
    let r = "Ali"
    let result = xx.concat(r)


    console.log(result)

}

m()
console.log("Hallo")