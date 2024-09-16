
// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

function palindrome(str){
 str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
 console.log(str)
// str = str.replace(/[^a-z0-9]/i,"").toLowerCase();
const len = str.length;

if(len<=1) return true;

if(str[0] !== str[len-1]) return false;
console.log(str.slice(1,-1))
return palindrome(str.slice(1,-1));
}
console.log(palindrome("1001"))
//p(1001)
//p(00)
//p(00) -->
//p(0) -->true