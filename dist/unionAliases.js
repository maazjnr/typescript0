"use strict";
function combine(n1, n2) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString;
    }
    return result;
}
const combineAges = combine(12, 23);
console.log(combineAges);
//# sourceMappingURL=unionAliases.js.map