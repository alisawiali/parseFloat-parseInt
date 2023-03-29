
/*
-- Function 
.. Anonymous Function
.. Calling Named Function vs Anonmyous Function
.. Argument To other Function
.. Task without Name
.. SetTimout
*/
// document.getElementById("btn").onclick= function(){
//     function halloMassge1(onw, tow) {
//         return onw + tow
//     }

//     console.log(halloMassge1(1, 2))
// }
// setTimeout(function(){
//     console.log('hallo welt')
// },2000)
//----------------------------------------
function halloMassge1(onw, tow) {
    return onw + tow
}
console.log(halloMassge1(1, 2))


let sum = function (one, tow) {
    return one * tow
}
console.log(sum(2, 4));

console.log('//--------Return nested Function---------->')

function sagHi(test1, test2, test3) {
    let massage = ('Hallo');
    // Nested Function 
    function concatCalc() {
        function getVollName() {
            return `${test1} ${test2}`
        }

        return `${massage} ${getVollName()} ${test3}`;

    }
    return concatCalc()
}
console.log(sagHi("Imad ", "Ali", 36 + ' jahre alt'))
console.log("<--------return Von Mir----->")
let main = () => {
    let sum = 'Hallo'
    function omer() {
        return sum = sum + ' Alisawi Imad'
    }
    return omer()
}

console.log(main())


