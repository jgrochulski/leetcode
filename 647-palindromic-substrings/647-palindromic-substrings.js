/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  if (s.length === 1) return 1
  
  let num = s.length
  
  for (let i = 1; i < s.length - 1; i++) {
    let l = i - 1
    let r = i + 1
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        num++
        l--
        r++
      }
      else break
    }
  }
  
  for (let i = 0; i < s.length - 1; i++) {
    let l = i
    let r = i + 1
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        num++
        l--
        r++
      }
      else break
    }
  }
  
  return num
};