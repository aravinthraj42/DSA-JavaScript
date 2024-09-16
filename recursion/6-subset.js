// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]
function subset(nums){
    let result = [];
    let temp = [];
function recursionsubset(nums, i){
    
if(i === nums.length) {
    console.log('inside if')
    return result.push([...temp])
}


// temp.push(nums[i]);
// recursionsubset(nums, i + 1);
// temp.pop();
// recursionsubset(nums, i + 1);
console.log('>>>>>',temp.push(nums[i]))
console.log('######',recursionsubset(nums, i+1))
console.log('@@@@@', temp.pop());
console.log('//////', recursionsubset(nums, i+1))
}
console.log('outside inner fun fun', recursionsubset(nums,0))
// recursionsubset(nums,0);
return result;
}
// subset([1,2,3])
console.log(subset([1]));