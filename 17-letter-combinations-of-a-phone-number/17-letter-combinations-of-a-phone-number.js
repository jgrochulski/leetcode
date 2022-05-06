/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  
  if (digits.length === 0) return []
  
  const output = []
  
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }
  
  // console.log(map[2].length)
  
  function backtrack(i, str) {
    if (str.length === digits.length) {
      output.push(str)
      return
    }
    for (const char of map[digits[i]]) {
      backtrack(i + 1, str + char)
    }
  }
  
  backtrack(0, "")
  
  return output
  
};