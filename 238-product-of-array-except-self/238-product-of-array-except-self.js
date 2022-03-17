/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = []
  let right = 1;
  let left = 1;
  
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = right
    right *= nums[i]
  }
  
  for (let i = 0; i < nums.length; i++) {
    output[i] *= left
    left *= nums[i]
  }
  
  return output
};

