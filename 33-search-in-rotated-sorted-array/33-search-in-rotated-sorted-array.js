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
  // let m = 0
  
  // console.log("nums[l]:" + nums[l] + " nums[m]:" + nums[m] + " nums[r]:" + nums[r])
  
  
  while (l <= r) {
    
    const m = Math.floor((l + r) / 2)

    if (nums[m] === target) return m
    
    if (nums[l] <= nums[m]){ // left sorted
      if (nums[l] <= target && nums[m] > target) { // look left
        r = m - 1
        // console.log("case1")
      }
      else { // look right
        l = m + 1
        // console.log("case2")
      }
    }
    else {  // right sorted
      if (nums[m] < target && nums[r] >= target) { // look right
        l = m + 1
        // console.log("case3")
      }
      else { // look left
        r = m - 1
        // console.log("case4")
      }
    }   
  }
  return -1
};
  
  //  [4,5,6,7,0,1,2] -> 4
  
  