/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  
  const dict = new Set()
  
  for (let i = 0; i < wordDict.length; i++) {
    dict.add(wordDict[i])
  }
  
  console.log(dict)
  
  const dp = new Array(s.length + 1).fill(false)
  console.log(dp)
  dp[s.length] = true
  
  for (let i = s.length - 1; i >= 0; i--) {
    for (const w of wordDict) {
      if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
        dp[i] = dp[i + w.length]
      }
      if (dp[i]) break
    }
  }
  console.log(dp)
  
  return dp[0]
 
  
  
  
};