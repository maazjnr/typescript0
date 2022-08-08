function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1, n2);
  } else {
    return n1 + n2;
  }
}

let number1 = 13;
const number2 = 3;
const printResult = true;

add(number1, number2, printResult);
