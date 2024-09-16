// function factor(n){
//     if(n === 0){
//         return 1;
//     }else{
//         return n * factor(n-1)
//     }
// }
// console.log(factor(7))

function fact(n){
    // var s = new Stack()
var s = [];
    while(n>1){
      let pus=  s.push(n--); // n = n-1 7-1,6-1
        console.log(pus)
    }
    var prod = 1;
    while(s.length > 0){
     prod *=s.pop() // prod* s.pop()
     console.log(prod);
    }
    return prod;
}
console.log(fact(7))
