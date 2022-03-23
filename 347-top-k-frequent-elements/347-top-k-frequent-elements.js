/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map()
  const arr = new Array(nums.length + 1).fill([])
  
  for (const i of nums) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1)
    }
    else {
      map.set(i, 1)
    }
  }
  
  map.forEach((freq, num) => {
    arr[freq] = [...arr[freq], num]
  })
  
  const ans = []
  
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i].length > 0) {
      for (let j = arr[i].length - 1; j >= 0; j--) {
        ans.push(arr[i][j])
        if (ans.length === k) return ans
      }
    }
  }   
};