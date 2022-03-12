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
  let r = k
  
  while (r < nums.length) {
    sum = sum - (nums[r-k]) + (nums[r])
    max = Math.max(max, sum)
    r++
  }
  
  return max / k
};