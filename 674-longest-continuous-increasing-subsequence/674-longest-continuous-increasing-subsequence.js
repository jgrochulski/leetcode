/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  
  let ans = 0;
  let anchor = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      anchor = i
    }
    ans = Math.max(ans, i - anchor + 1)
  }
  
  return ans
  
};