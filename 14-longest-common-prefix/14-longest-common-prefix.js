/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0]
  
  const words = strs.length
  const chars = strs[0].length
 
  let ans = ""
  
  
  for (let i = 0; i < chars; i++) {
    for (let j = 0; j < words; j++) {
      if (strs[j][i] != strs[0][i]) return ans
    }
    ans += [strs[0][i]]
  }
  
  return ans
};