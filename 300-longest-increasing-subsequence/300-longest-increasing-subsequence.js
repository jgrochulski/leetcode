/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1)
  
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j])
      }
    }
  }
  
  console.log(dp)
  
  let max = 0
  
  for (const len of dp) {
    max = Math.max(max, len)
  }
  
  return max
};