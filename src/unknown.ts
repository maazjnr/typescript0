let userInput: unknown;
let userName: string;

userInput = "Ishaq";

if(typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw{message: message, errorCode: code}
}

generateError("an error ocured", 10000);