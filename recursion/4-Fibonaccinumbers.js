// Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2
var fib = function(n){
let arr = [0,1];

for(let i =2; i<=n; i++ ){
    arr.push(arr[i-2] + arr[i-1])
}
return arr[n];
}

// a[i-2]-> [2-2] =a[0] 2    3     4    5
//a[i-1] -> 2-1 => a[1] 0+1, 1+2 , 2+3, 3+4

// console.log(fib(10))


function fibrecursion(n){
 if(n<=1) return n;
 return fibrecursion(n-1)+ fibrecursion(n-2)
 
}
n = 10
for (let i = 0; i < n; i++) { 
    console.log(fibrecursion(i))
};
