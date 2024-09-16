// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Optimised Solution - Deque
const maxSlidingWindowQueue = function (nums, k) {
  const result = [];
  const dequeue = []; // 
  for(let i =0; i<nums.length; i++){
  //  && 1st od dequeue <= i-k => 1-3 , 2-3, 3-3 ,4-3, 5-3, 6-3, 7-3,8-3
if(dequeue.length>0 && dequeue[0]<= i - k){
  console.log('dequeue shift', + i , dequeue.shift())
  // dequeue.shift(); // removes first element
}
  // 0      && nums[dequeue[0]]
while(dequeue.length>0 && nums[dequeue[dequeue.length-1]]< nums[i] ){
  console.log('dequeue pop', + i ,dequeue.pop());
// dequeue.pop();
}
console.log('deque push', i + dequeue.push(i))
dequeue.push(i) // push last at array
// 0 > 3-1, 1 > 3-1 2 > 3-1> 3 >3-1 4>3-1 5>3-1
if(i>= k-1){// i =3 //3>2
  console.log('result push', result.push(nums[dequeue[0]]))
  // result.push(nums[dequeue[0]]); 
}
  }
  return result;
}
console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));