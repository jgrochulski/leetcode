/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  
  const len = nums.length
  
  let sum1 = 0
  let sum2 = 0
  
  // [sum1, sum2, n, n+1, ...]
  
  for (let i = 0; i < len; i++) {
    const current = Math.max(sum1 + nums[i], sum2)
    sum1 = sum2
    sum2 = current
  }
  
  return sum2
};