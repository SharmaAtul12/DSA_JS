// My Thought Process =======>>>>>>>>

function sumArr(n,arr) {
  if(n < 0 ) return 0;
  return arr[n] + sumArr(n-1,arr)
}

let arr = [1,2,3,4,5];
let n = arr.length;
const result = sumArr(n-1, arr);
console.log("Sum Of All the Elements in Array Is : ", result)


// Sir Thought Process =======>>>>>>>>

let arr = [1,2,3,4,5];

function sumArr(n) {
  if(n === 0 ) return arr[n];
  return arr[n] + sumArr(n-1)
}

let n = arr.length;
const result = sumArr(n-1);
console.log("Sum Of All the Elements in Array Is : ", result)