/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let newNums = []
    for (let i=1; i< nums.length;i++){
        nums[i] += nums[i-1]
    }
    return nums
};