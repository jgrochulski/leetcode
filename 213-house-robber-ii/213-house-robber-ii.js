/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  
  if (len === 1) return nums[0]
  
  let ans = 0
  let rob1 = 0
  let rob2 = 0
  
  for (let i = 0; i < 2; i++) {
    rob1 = 0
    rob2 = 0
    for (let j = i; j < len - 1 + i; j++) {
      const current = Math.max(nums[j] + rob1, rob2)
      rob1 = rob2
      rob2 = current
    }
    ans = Math.max(ans, rob2)
  }
  
  return ans
  
};