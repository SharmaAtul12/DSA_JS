//? Normal Version -----------------------------------------------------------> 

// let arr = [5, 2, 4, 1];

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp;
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr
// }

// let result = bubbleSort(arr);
// console.log(result)

//! Improved Version --------------------------------------------------------------> 

let arr = [5, 2, 4, 1];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    // Means Koi Swapping Nhi Hui hh => Matlab Array Sorted hai 
    if(!isSwapped) break;
  }
  return arr
}

let result = bubbleSort(arr);
console.log(result)

