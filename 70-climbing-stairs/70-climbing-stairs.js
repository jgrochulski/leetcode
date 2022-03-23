/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let singleStep = 1
  let doubleStep = 0
  
  
  for (let i = 0; i < n; i++) {
    const temp = singleStep;
    singleStep = singleStep + doubleStep;
    doubleStep = temp
  }
  
  return singleStep
    
};

//       . 
// 0 1 2 3 4
// 3 2 1 1 0