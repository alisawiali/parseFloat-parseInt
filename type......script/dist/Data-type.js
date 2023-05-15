"use strict";
console.clear();
function compy(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compy(10, 10));
console.log(compy(20, 10));
console.log(compy(10, 30));
