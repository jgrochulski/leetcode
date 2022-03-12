/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let avg;
  let sum = 0;
  
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  
  avg = sum / k
  let max = avg
  let l = 0;
  let r = k
  
  console.log(avg)
  console.log(max)
  
  
  while (r < nums.length) {
    avg = avg - (nums[l] / k) + (nums[r] / k)
    max = Math.max(max, avg)
    l++
    r++
  }
  
  return max
};