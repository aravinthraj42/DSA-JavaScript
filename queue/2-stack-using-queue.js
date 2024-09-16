// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).
var MyStack = function () {
this.q1 =[];
this.q2= [];
}
//[9,3,1] -- queue-out -pop
//[]
MyStack.prototype.push = function (x) {
    while(this.q1.length !==0){ // q1 becoming Empty while exit from loop 
        this.q2.push(this.q1.shift())
        console.log('inside q1 length not' + this.q2)
    }
     this.q1.push(x); //[4,3] = add elemen atlast
    console.log('outside while'+ this.q1)
    while(this.q2.length !== 0){  // q2 emptyy while exit from loop
        this.q1.push(this.q2.shift())
        console.log('inside q2 not' + this.q1)
        
    }
    console.log(this.q1)
}
MyStack.prototype.pop = function () {
    return this.q1.shift();

}
MyStack.prototype.empty = function(){
    return this.q1.length ===0;

}
MyStack.prototype.top = function(){
    return this.q1[0];
}

var myobj = new MyStack()

myobj.push(10);
myobj.push(20);
myobj.push(30);