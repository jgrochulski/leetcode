/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }
  
  const len = nums.length
  let l = 0
  let r = len - 1
  
  while (l <= r) {
    
    const m = Math.floor((l + r) / 2)

    if (nums[m] === target) return m
    
    if (nums[l] <= nums[m]){ // left sorted
      if (nums[l] <= target && nums[m] > target) { // look left
        r = m - 1
      }
      else { // look right
        l = m + 1
      }
    }
    else {  // right sorted
      if (nums[m] < target && nums[r] >= target) { // look right
        l = m + 1
      }
      else { // look left
        r = m - 1
      }
    }   
  }
  return -1
};
  
  