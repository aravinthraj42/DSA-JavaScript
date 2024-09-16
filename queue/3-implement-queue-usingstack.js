// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.enqueue = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    console.log("outside while", this.stack2);
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
      console.log("inside while", this.stack2);
    }
    return this.stack2.pop();
  }
};

MyQueue.prototype.Front = function () {
    if (this.stack2.length === 0) {
        console.log("outside while", this.stack2);
        while (this.stack1.length !== 0) {
          this.stack2.push(this.stack1.pop());
          console.log("inside while", this.stack2);
        }        
      }
  return this.stack2[this.stack2.length - 1];
};
MyQueue.prototype.Empty = function () {
  return this.stack1.length == 0 && this.stack2.length == 0;
};

var stack = new MyQueue();
console.log(stack.Empty());
console.log(stack.Front());
stack.enqueue(10)
stack.enqueue(100)
stack.enqueue(10000)
console.log(stack.Front());
stack.dequeue();

