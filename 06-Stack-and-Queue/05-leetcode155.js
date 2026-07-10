//! My Solution : using another array which store the minimum values 


var MinStack = function() {
    this.stack = []
    this.min = []
};

MinStack.prototype.push = function(value) {
    if(this.stack.length === 0 || this.min[this.min.length - 1] >= value) {
        this.min.push(value)
    } 
    this.stack.push(value)
};


MinStack.prototype.pop = function() {
    if(this.stack[this.stack.length - 1] === this.min[this.min.length - 1]) {
        this.min.pop();
    }
    this.stack.pop()
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};


//! Sir Solition : pushing array in the main stack array. array look like => [value, minValue]


var MinStack = function() {
    this.stack = []
};

MinStack.prototype.push = function(value) {
    if(this.stack.length === 0) {
        this.stack.push([value,value])
    } else {
        let lastMinValue = this.stack[this.stack.length - 1][1]
        let minValue = Math.min(value, lastMinValue)
        this.stack.push([value,minValue])
    }
};

MinStack.prototype.pop = function() {
    this.stack.pop()
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0]
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1]
};