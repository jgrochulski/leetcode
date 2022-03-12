/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  
  let max = sum
  
  for (let r = k; r < nums.length; r++) {
    sum = sum - (nums[r-k]) + (nums[r])
    max = Math.max(max, sum)
  }
  
  return max / k
};