//! Stack Implementation in JavaScript

let stack = [];

stack.push(1);
stack.push(2);
console.log("Initial Stack: ",stack); // [1, 2]

stack.pop();
console.log("Stack After One pop ",stack); // [1]

// Finding the top element of the stack
console.log("Top element of the stack: ",stack[stack.length - 1]); // 1

//! Invalid stack opeation : Don't use stack like an array
stack[3]; // Accessing the element directly from the stack is not a valid operation. 

//! Queue Implementation in JavaScript

let queue = [];

// enque the elements inside the queue
queue.push(1);
queue.push(2);
console.log("Initial Queue: ",queue); // [1, 2]

// deque the elements from the queue : using shift() method which shift the entire array to the right and remove the first element
queue.shift();
console.log("Queue After One deque ",queue); // [2]

// Finding the front element of the queue

let frontElement = queue[0];
console.log("Front element of the queue: ",frontElement); // 2

//! Invalid queue opeation : Don't use queue like an array
queue.pop(); // pop is not valid operation for queue . 
queue[3];   // Accessing the element directly from the queue is not a valid operation. 
