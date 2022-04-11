/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let n = nums.length
  let max = nums[0] // handle [-1] case
//   let dp = []
//   dp[0] = nums[0]
  
//   for (let i = 1; i < n; i++) {
//     dp[i] = nums[i] + (dp[i-1] > 0 ? dp[i-1] : 0)
//     max = dp[i] > max ? dp[i] : max
//   }
//   return max
  
   let l = 0
   let r = 0
   
   let sum = nums[0]
   while (r < n) {
     if (nums[r] > sum) {
       l = r
       sum = nums[r]
     }
     max = Math.max(max, sum)
     r++
     sum = sum + nums[r]
  }
  return max  
};

