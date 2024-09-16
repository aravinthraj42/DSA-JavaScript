// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Brute Force Solution


const slidingWindowMax = function (nums,k){
    const result = [];
    const n = nums.length

    for(i =0; i<=n-k; i++){
        let max = nums[i];
        // console.log(max);
    for(j = 1; j<k; j++){//j = 1, j<3 ,j++

        if(nums[i+j]> max){ //1. i+j = 0+1 nums[1]> max,0+2 num[2]>max, 0+3  
            console.log(3>3);
            console.log(nums[i+j])
            max = nums[j+i];

        }
    } 
    result.push(max);
    }
    return result;
}
  // Time Complexity - O(n*k) => O(n^2)
  // Space Complexity - O(n)
console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3))