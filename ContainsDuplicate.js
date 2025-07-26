/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
  
  //create an empty set
    const EmptySet=new Set();
    
    //loop through the nums array
    for(let num of nums){
        //check if the element is in the new set
        if(EmptySet.has(num)){
            return true;
        }

        //add the element into the empty set 
        EmptySet.add(num);
    }

    return false;
};



console.log(containsDuplicate([1,2,2,3,4])) //true

console.log(containsDuplicate([1,2,3,4,5]))