let arr = [7, 1, 5, 4, 3, 2];
let n = arr.length;

for(let i = 1; i < n; i++) {
  let currentElement = arr[i];
  let prevIndex = i - 1;

  while(arr[prevIndex] > currentElement && prevIndex >= 0) {
    //! arr[prevIndex+1] means currentElement ke jagah pp arr[prevIndex] (larger than currentElement) ko Dal do . and prevIndex ko 
    //! kam krdo So that vo compare kar paye baki kk elements ss. and prevIndex >= 0 this prevent p ke value - mm na jaye .
    arr[prevIndex+1] = arr[prevIndex]
    prevIndex--;
  }
  //! And Agr Aisa nhi hai Means arr[prevIndex] chota hai Current element ss . So uske aage dal denge currentElement ko 
  arr[prevIndex+1] = currentElement
}

console.log(arr)