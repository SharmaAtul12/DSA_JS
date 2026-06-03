// Using ifElse ================================================> 

let arr = [5,3,2,0,1];

function sumArr(n) {
  let isODD = arr[n] % 2 !== 0;

  // BASE CASE 
  if(n === 0) {
    if(isODD) return arr[n];
    else return 0;
  }

  if(isODD) {
    return arr[n] + sumArr(n-1)
  } else {
    return sumArr(n-1);
  }
}

let n = arr.length;
const result = sumArr(n-1);
console.log("Sum Of All the ODD Elements in Array Is : ", result)

// Using Terneary Operator ========================================>


let arr = [5,3,2,0,1];

function sumArr(n) {
  let isODD = arr[n] % 2 !== 0;

  // BASE CASE 
  if(n === 0) {
    return isODD ? arr[n] : 0
  }

  return isODD ? arr[n] + sumArr(n-1) : 0 + sumArr(n-1);
}

let n = arr.length;
const result = sumArr(n-1);
console.log("Sum Of All the ODD Elements in Array Is : ", result)
