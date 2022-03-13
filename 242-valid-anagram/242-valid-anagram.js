/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  if (s.length != t.length) return false
  
  const chars = new Array(26).fill(0)
  
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
    chars[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1
  }
  
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] != 0) return false
  }
  
  return true
  
};