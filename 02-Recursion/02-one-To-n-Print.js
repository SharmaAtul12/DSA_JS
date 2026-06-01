// Print 1 to n Using Recursion 

// Approach 1 =========>

function fun(i, num) {
  if(i > num) return;
  console.log(i)
  i++;
  fun(i,num);
}

let n = 15;
let i = 1;
fun(i, n);

// Approach 2 =========> 
let n = 15;
function fun(x) {
  if(x > n) return;
  console.log(x);
  fun(x+1);
}

let x = 1;
fun(x);