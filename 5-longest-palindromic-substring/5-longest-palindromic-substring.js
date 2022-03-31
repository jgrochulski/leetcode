/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) return s
  
  let max = s[0]
  
  for (let i = 1; i < s.length; i++) { // odd length palindrome check
    let l = i - 1
    let r = i + 1
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        if ((r - l + 1) > max.length) {
          max = s.slice(l, r+1)
        }
        l--
        r++
      }
      else break
    }
  }
  
  for (let i = 0; i < s.length - 1; i++) { // even length palindrome check
    let l = i
    let r = i + 1
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        if ((r - l + 1) > max.length) {
          max = s.slice(l, r+1)
        }
        l--
        r++
      }
      else break
    }
  }
  return max
};