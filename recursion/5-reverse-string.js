// Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"
function reverseString(str){
    if(str === "")  return "";
   
    else{
    //    console.log(reverseString(str.substr(1)))
    // let rev = reverseString(str.substr(1)) + str.charAt(0)
    // console.log(rev)
     return reverseString(str.substr(1)) + str.charAt(0)
    }
    
}

console.log(reverseString('hello'))

// console.log(('hello'.substring(1)) + 'hello'.charAt(0));
// str.sub(1) -> ello + str.c(0) -> h -- > reve()

//substring -> removes the to n sub(1)  - 