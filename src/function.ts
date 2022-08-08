function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResultd(num: number): void{
    console.log("Result " +  num)
}

printResultd(add(4, 5))

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(2, 2))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

addAndHandle(10, 32, (result) => {
    console.log(result)
}) 

