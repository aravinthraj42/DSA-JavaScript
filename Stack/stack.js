// Basic Implementation of Stack.

class Stack{

    constructor(){
        this.stack = [];
    }

    push(element){
        return this.stack.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return 'stack is empty cannot perform opertion';
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return 'stack is empty cannot perform opertion';
        }
        return this.stack[this.size() -1]
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.stack.length;
    }
   
printtrace(){
    
}
}
const s = new Stack();
// stack.push(10);
// stack.push(69);
// stack.push(420);

// console.log(stack.size());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());
s.push(100);
s.push(200);
s.push(300);
console.log(s);
console.log(s.size());
console.log(s.isEmpty());
console.log(s.pop());
console.log(s.peek());
console.log(s.size());
console.log(s.pop());
console.log(s.pop());
console.log(s.isEmpty());
console.log(s.size());

