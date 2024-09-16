class queue{
    constructor(){
    this.queue = [];
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        if(!this.isEmpty()){
        return this.queue.shift();
        }
        return 'Queue is underflow'
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    size(){
        return this.queue.length;
    }
    peek(){
        return this.queue[0];
    }
    print(){
        // let queueString = '';
        // for(let i =0; i< this.size(); i++){
        //     queueString += this.queue[i] + ',';
        // }
        console.log("Queue:"+ this.queue);
    }

}
const myqueue = new queue();

console.log(myqueue.isEmpty());
console.log(myqueue.size());
myqueue.enqueue(10);
myqueue.enqueue(20);
myqueue.enqueue(30);
myqueue.print()
console.log(myqueue.isEmpty());
console.log(myqueue.size());

myqueue.dequeue()

myqueue.print()
console.log(myqueue.isEmpty());
console.log(myqueue.size());
