//? First Version ---------------------------------------------------------------------> 

// let arr = [7, 1, 5, 4, 3, 2];

// let n = arr.length;
// let min;

// for (let i = 0; i < n - 1; i++) {
//   //! Phle Element Ko Minimum Man Liya
//   min = i;
//   //! j is starting from i + 1 that's why we have taken the condition j < n . try dry run it
//   for (let j = i + 1; j < n; j++) {
//     if (arr[min] > arr[j]) {
//       min = j; // Minimum Index Mil Gya .
//     }
//   }
//   //! Swapping arr[min] with first element arr[i]
//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }

// console.log(arr);

//? Little Improved Version ---------------------------------------------------------------->

let arr = [7, 1, 5, 4, 3, 2];

let n = arr.length;
let min;

for (let i = 0; i < n - 1; i++) {
  //! Phle Element Ko Minimum Man Liya
  min = i;
  //! j is starting from i + 1 that's why we have taken the condition j < n . try dry run it
  for (let j = i + 1; j < n; j++) {
    if (arr[min] > arr[j]) {
      min = j; // Minimum Index Mil Gya .
    }
  }
  //! Swapping arr[min] with first element arr[i]
  if (i != min) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}

console.log(arr);
