"use strict";
console.clear();
function result(sum) {
    console.log(`${sum.one} ${sum.tow} ${sum === null || sum === void 0 ? void 0 : sum.three} ${sum.five}`);
}
result({ one: "imad", tow: 2, three: true, five: "Ali" });
