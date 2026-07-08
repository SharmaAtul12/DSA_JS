//! Implementing a stack using queues (2 queues) --------------------------------------------------------------------


var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++) {
        // let frontEle = this.q1.shift()
        // this.q2.push(frontEle)
        this.q2.push(this.q1.shift())
    }
    // Last Element q1 mm ss nikal diya ab and usko store kr liya taki return kr ske 
    let lastEle = this.q1.shift();

    // Exchange q1 and q2 
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp

    return lastEle
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift())
    }
    let topEle = this.q1.shift();

    // Adding top Element also in q2
    this.q2.push(topEle)

    // Exchange q1 and q2 
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp

    return topEle
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
   return this.q1.length === 0
};


//! Implementing a stack using queues (1 queue) --------------------------------------------------------------------


var MyStack = function() {
    this.q1 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++) {
        this.q1.push(this.q1.shift())
    }
    let lastEle = this.q1.shift()
    return lastEle;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++) {
        this.q1.push(this.q1.shift())
    }
    let topEle = this.q1.shift();
    this.q1.push(topEle);
    return topEle
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};
