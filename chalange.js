
console.log('Challnge One')

let names = (...run) => {
    return `string[${run.join("], [ ")},'=> Done' ]`
}

console.log(names("Osma", "Mohamed", "Ali", "Ibrahiem"))


let mynumbers = [20, 50, 10, 60];

let calc = (one, tow, ...nums) => {
    return one - tow - nums[0] + nums[1] + nums[1];
}

console.log(calc(20, 50, 10, 60))


function showDetails(...data) {
    let
        a = 0,
        b = 0,
        c = 0;
    for (let i = 0; i < 3; i++) {
        typeof data[i] === 'string'
            ? (a = data[i])
            : typeof data[i] === 'number'
                ? (b = data[i])
                : data[i] === false
                    ? (c = 'Not Availble')
                    : (c = 'Availble');
    }
    return console.log(`Hi ,${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
}
showDetails('Mohamed', true, 38);
console.log('// Zweite Lösung---------->')
function test(y, x, c) {
    let main = [y, x, c];
    for ( i = 0; i < 3; i++) {
        if (typeof main[i] === 'string') {
            first = main[i]
        } else if (typeof main[i] === 'number') {
            second = main[i]
        } else if (typeof main[i] === Boolean) {
            if (main[i] === true) {
                c = "Available";
            } else {
                c = "Not Available"
            }
        }
    }

}
test("imad", true, 23)
console.log(`Hallo ich heiße ${first} und ich bin ${second} und ich bin`);




