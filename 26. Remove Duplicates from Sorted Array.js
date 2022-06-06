/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let startIndex =0, previousValue= nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== previousValue){
            previousValue = nums[i]
            startIndex += 1 
            nums[startIndex] = nums[i]
        }
    }
    return startIndex + 1
};

// option number 2 
var removeDuplicates = function(nums) {
   for(let i=0; i< nums.length-1;i++){
       if(nums[i]==nums[i+1]){
           nums.splice(i,1)
            i--
       }
   }
    return nums.length
};