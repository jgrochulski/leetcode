/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  
    if (nums.length === 1) return nums[0];
    if (Array.isArray(nums) && !nums.length) return 0;

    let currentMax = nums[0];
    let currentMin = nums[0];
    let previousMax = nums[0];
    let previousMin = nums[0];
    let solution = currentMax; // 2

    for (let i = 1; i < nums.length; i++) {
        let currentNumber = nums[i];
        currentMax = Math.max(currentNumber, currentNumber * previousMax, currentNumber * previousMin);
        //  3   6   6 ->   6
        // -2 -12  -6 ->  -2
        //  4  -8 -48 ->   4
        currentMin = Math.min(currentNumber, currentNumber * previousMax, currentNumber * previousMin);
        //  3   6   6 ->   3
        // -2 -12  -6 -> -12
        //  4  -8 -48 -> -48
        previousMax = currentMax;
        previousMin = currentMin;

        
        solution = Math.max(solution, currentMax);
        // 6, 6, 6 -> 6
    }
    return solution;
  
  
};

