

// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the
const reverseString = function(s){

    const splitS = s.split(" ")
    const stack = [];

    for(let i of splitS){
        stack.push(i);
    }
    let finalS = "";

    while(stack.length){
        const char = stack.pop();
        if(char){
        finalS += " "+ char;
        }
    }
    return finalS.trim();

}
console.log(reverseString('the sky is  blue'));
console.log(reverseString("a good   example"));