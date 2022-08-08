"use strict";
let userInput;
let userName;
userInput = "Ishaq";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error ocured", 10000);
//# sourceMappingURL=unknown.js.map