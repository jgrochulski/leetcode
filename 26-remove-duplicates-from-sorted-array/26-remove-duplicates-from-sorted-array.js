/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 1) return nums
  
  let len = nums.length
  
  let i = 0
  
  while (nums[i] <= nums[i+1] && i < len) {
    if (nums[i] === nums[i+1]) {
      nums.push(...nums.splice(i, 1))
      len--
    }
    else {
      i++
    }
  }
  
  return i + 1
};