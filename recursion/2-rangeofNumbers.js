// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:
function rangeOfNumbers(startNum, endNum){
if(startNum > endNum ) return [];
else {
    const numbers = rangeOfNumbers(startNum, endNum-1)
    console.log(numbers)
    numbers.push(endNum);
    return numbers;
}
}
console.log(rangeOfNumbers(1,5))

// r(1,5) --> [1,2,3,4,5]
//r(1,4) -->[1,2,3,4]
//r(1,3) -->[1,2,3]
//r(1,2) -->[1,2]
//r(1,1) -->[1]
//r(1,0) --> []