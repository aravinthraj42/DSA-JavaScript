// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular queue. The circular queue is a
// linear data structure in which the operations are performed based on First In First Out
// principle, and the last position is connected back to the first position to make a circle.

var MyCircularQueue = function(k){
    this.queue = [];
    this.size = k;

}
MyCircularQueue.prototype.enqueue = function (value){
    if(this.queue.length === this.size) return false;

    this.queue.push(value);
    return true;
}
MyCircularQueue.prototype.dequeue = function(){
    if(this.queue.length === 0) return false;
    this.queue.shift();
    return true;
    
}
MyCircularQueue.prototype.peek = function(){
    if(this.queue.length === 0) return false;
    return this.queue[0];
}
MyCircularQueue.prototype.rear = function(){
    if(this.queue.length === 0) return false;
    return this.queue[this.queue.length-1];
}
MyCircularQueue.prototype.isFull = function(){
return this.size ===  this.queue.length;    
}
MyCircularQueue.prototype.isEmpty = function(){
    return this.queue.length === 0; 
    
}

var obj = new MyCircularQueue(4);

obj.enqueue(1000);
obj.enqueue(2);
obj.enqueue(5);
console.log(obj.isEmpty());
console.log(obj.isFull());
// obj.dequeue();
// obj.dequeue();
obj.enqueue(73);
console.log(obj.rear(), obj.peek())
// console.log(obj.isEmpty());
// console.log(obj.isFull());

