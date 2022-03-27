/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  
  if (nums.length === 1) return nums[0];
  
  let currentMax = nums[0]
  let currentMin = nums[0]
  let previousMax = nums[0]
  let previousMin  = nums[0]
  
  let solution = currentMax
  
  for (let i = 1; i < nums.length; i++) {
    
    const currentNumber = nums[i]
    
    currentMax = Math.max(
      currentNumber,
      currentNumber * previousMax,
      currentNumber * previousMin
    )
    currentMin = Math.min(
      currentNumber,
      currentNumber * previousMax,
      currentNumber * previousMin
    )
    previousMax = currentMax
    previousMin = currentMin
    
    solution = Math.max(solution, currentMax)
  }
  return solution
};

