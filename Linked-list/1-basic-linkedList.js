class Node{
    constructor(data){
    this.data = data;
    this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null; // Linkedlist { head: Node { data: undefined, next: null } }
    }
    append(data){
     const node = new Node(data);
     node.next = this.head;
     this.head = node;
    }
    prepend(data){
        const node = new Node(data);
        if(!this.head) {
            // console.log('inside if')
            this.head = node;
            return ;
           }  
         let curr = this.head;
        //  console.log('curr', curr)
        // console.log('curr.next', curr.next)
        while(curr.next){ // go inside if not null
            // console.log('inside while')
            curr = curr.next // changing curr to node's next.
        }
       // console.log('outside loop')
        curr.next = node
    }
    size(){
        let count = 0;
        let curr =  this.head;
        while(curr){
            // console.log('inside while')
            count ++
            // console.log(curr)
            curr = curr.next
        }
        return count;
    }
    addAt(index,data){
        if(index <0 || index> this.size()) {
        console.log('Invalida Index');
        return ; 
        }
        const node = new Node(data);
       if(index === 0){ 
       node.next = this.head; // will point null or next node
       this.head = node;
       return ''
       }
       let curr = this.head; // this.head will have null if empty or node
       for(let i =0; i < index-1; i++){ // if you want add index 4 for loop will stop at 3 index
           curr = curr.next;
       }
    //    console.log('node.next',node.next);
    //    console.log('curr',curr)
    //    console.log('curr.next', curr.next);
       node.next = curr.next;
    //    console.log('curr', curr);
       curr.next = node; 
       console.log(node)
    }
    removeTop(){
        if(!this.head) {
            // console.log('inside  IF')
            return;
        }
        // console.log(this.head.next)
        this.head = this.head.next;
        // console.log(this.head.next)
    }
    removelast(){
        if(!this.head) {
            // console.log('inside  IF')
            return ;
        }
        
        let curr = this.head;
        // console.log(curr)
        while(curr.next.next) {
            // console.log('inside while');
        curr = curr.next
        }
        curr.next = null
    }
    removeAt(index){
        if(index < 0 || index > this.size()){
            console.log('Index out of Boundary');
            return ;
        }
        if(index === 0){
            this.head = this.head.next
        }else {
            let curr = this.head
            for(let i =0; i < index-1; i++){
                // console.log('indside for loop')
                curr = curr.next
            }
            if(curr.next){
                // console.log('inside if')
                curr.next = curr.next.next
            }
        }
    }
    search(value){
        if(!this.head){
            return -1;
        }
        let i =0;
        let curr = this.head;
        while(curr){
            if(curr.data === value){
                return i;
            }
            curr = curr.next
            i++
        }
        return -1;
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
        let next = curr.next;
        curr.next = prev
        // console.log('curr.next',curr.next)
        prev = curr
        // console.log('prev',prev)
        curr = next    
        // console.log('curr',curr)
        }
        this.head = prev
        
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new Linkedlist();

list.append(10);
list.append(5);
list.append(15);
list.append(20);
console.log('size:',list.size())

list.prepend(25);
list.prepend(50)
list.prepend(100)
list.append(50);


console.log(list.addAt(0,75))
// console.log(list.removeTop());
// list.removelast()
// list.removeAt(5)
console.log('size:',list.size())
list.print()
console.log('----------------')
list.reverse();
list.print()
console.log('Search value:', list.search(50));
// console.log(list.removelast())

// 
// console.log(list)
// 
// console.log(list)
// console.log(list)
// console.log(`{$ if(null)}`)
