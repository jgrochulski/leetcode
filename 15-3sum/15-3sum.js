/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortedNums = nums.sort((a, b) => {
    return a - b
  })
  
  const ans = []
  
  
  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i-1]) {
      continue
    }
    else {
      let l = i + 1
      let r = sortedNums.length - 1
      const a = sortedNums[i]
      
      while (l < r) {
        if (a + sortedNums[l] + sortedNums[r] > 0) r--
        else if (a + sortedNums[l] + sortedNums[r] < 0) l++
        else {
          ans.push([a, sortedNums[l], sortedNums[r]])
          l++
          while (sortedNums[l] === sortedNums[l-1]) {
            l++
          }
        }
      }
    }
  }
  
  return ans
  
};