/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set()

  for (const num of nums) {
    set.add(num)
  }
  
  let max = 0

  for(const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num
      let currentMax = 1
      while (set.has(currentNum + 1)) {
        currentNum ++
        currentMax ++
      }
      max = Math.max(max, currentMax)
    }
  }
  return max
};