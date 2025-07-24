/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // var n=nums.length;
    // var ans=new Array(2*n);

    // for(let i=0; i<n; i++){
    //     ans[i]=nums[i]; //first half
    //     ans[i+n]=nums[i]; //second half, offset by 2
    // }

    return nums.concat(nums);
};


console.log(getConcatenation([1,2,3,4]));