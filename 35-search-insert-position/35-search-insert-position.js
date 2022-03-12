/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  
  let min = 0;
  let max = nums.length - 1;
  let mid;
  
  while (max >= min) {
    mid = Math.floor((max + min) / 2);
    if (target == nums[mid]) {
      return mid
    }
    else if (target < nums[mid]) {
      max = mid - 1;
    }
    else {
      min = mid + 1;
    }
  }
  return max + 1
};