/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0;
    const len = s.length
    let l = 0;
    const map = new Map()
  
    for (let r = 0; r < len; r++) {
      if (map.has(s[r])) map.set(s[r], map.get(s[r]) + 1)
      else map.set(s[r], 1)
      
      while ((r - l + 1) - Math.max(...map.values()) > k) {
        map.set(s[l], map.get(s[l]) - 1)
        l++
      }
    
      max = Math.max(max, r - l + 1)
    }
    return max
};