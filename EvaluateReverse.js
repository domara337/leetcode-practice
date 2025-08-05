/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //initialize a empty stack
    const stack=[]; 

    //iterate over the tokens 
    for(let token of tokens){
        //if the token is an operator,pop the top two operands from the stack 
        if(token==='+' || token==='-' || token==='*' || token==='/'){


            //pop the top 2 operants to perform the operator on them.
            const b=stack.pop();
            const a=stack.pop();


            let result; 
            if(token=='+') result=a+b;
            else if(token==='-') result=a-b;
            else if(token==='*') result=a*b;
            else result=Math.trunc(a/b);


            //push the final result into the stack
            stack.push(result);
        }
        else{
            stack.push(parseInt(token));
        }
    }

    return stack[0];
};
tokens = ["2", "1", "+", "3", "*"]
console.log(evalRPN(tokens));