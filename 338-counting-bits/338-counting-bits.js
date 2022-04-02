/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const dp = new Array(n+1).fill(0)
  let log = 1
  
  for (let i = 1; i <= n; i++) {
    if (log * 2 === i) log = i
    dp[i] = 1 + dp[i - log]
  }
  return dp  
};