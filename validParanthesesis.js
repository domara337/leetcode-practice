/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]; 

    let map={
        ")":"(",
        "}":"{",
        "]":"[",
    }


    //loop through the string
    for(let i=0;i<s.length;i++){

    //get each character in the string
    var char=s[i];

   // check if stack is not empty and top of stack matches
            let topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== map[char]) {
                return false;
            }
        else {
            // it's an opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0;



}