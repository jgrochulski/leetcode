/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const len = nums.length  
  for (let i = 0; i < len; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length
};