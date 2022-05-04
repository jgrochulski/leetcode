/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const dp = new Array(nums.length).fill(false)
  dp[nums.length - 1] = true
  
  console.log(dp)
  
  for (let i = nums.length - 2; i >= 0; i--) {
    let jumps = nums[i]
    for (let j = 1; j <= jumps; j++) {
      if (dp[i + j] === true) {
        dp[i] = true
        break
      }
    }
  }
  
  console.log(dp)
  
  return dp[0]
};