/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left=0;
    let right=s.length-1;


    //check if right is greater than left
    while(left<right){
    if(s[left]!==s[right]) return false;
        left++;
        right--;
    
    }
    return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))