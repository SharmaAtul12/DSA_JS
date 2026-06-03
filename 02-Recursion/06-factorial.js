function calcFactorial(n) {
  if(n === 1) return 1;
  return n * calcFactorial(n-1)
}

let n = 5
let result = calcFactorial(n);
console.log("The Factorial Of ", n , "Is : ", result)