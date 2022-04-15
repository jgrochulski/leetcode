/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }
  
  let l = 0
  let r = nums.length - 1
  let m = Math.floor(( l + r) / 2)
  
  while (l <= r) {
    if (nums[m] === target) return m
    else if (nums[m] < target) {
      l = m + 1
    }
    else {
      r = m - 1
    }
    m = Math.floor((l + r) / 2)
  }
  
  return -1
};