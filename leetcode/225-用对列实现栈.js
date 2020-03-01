/**
 * Initialize your data structure here.
 */
var MyStack = function() {
	this.stack = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	this.stack[this.stack.length] = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
	let result = this.stack[this.stack.length - 1];
	this.stack.length = this.stack.length - 1;
	return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	return this.stack[this.stack.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	if (this.stack.length === 0) {
		return true
	} else {
		return false
	}
};