/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //generate the result list 
    const result=[];

    //base case-recursive function(takes current, open-paranthesis, closed-paranthesis) 

    function backTrack(current,open,close){
        //base-case:if the current string is complete(meaning the close, open have the same number of n)
        if(current.length==n*2){
            //push it into the result list
            result.push(current);
            return;
        }


        //second case:-if we can still add an opening paranthesis
        if(open<n){
            //call the recursive function and add 1 to the open variable(open-paranthesis);
            backTrack(current+"(",open+1,close)


        }

        //third case:if we can still add closing paranthesis(meaning:there are still open paranthesis that having no closing paranthesis) 
        if(close<open){
            backTrack(current+")",open,close+1);
        }


    }

    //start with backtract function 0,0
    backTrack("",0,0);
    return result;
};

console.log(generateParenthesis(4));
