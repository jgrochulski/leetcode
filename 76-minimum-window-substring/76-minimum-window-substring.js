/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s == "" || t == "") return ""
  
  const tMap = new Map()
  
  for (let i = 0; i < t.length; i++) {
    const count = tMap.get(t[i]) ? tMap.get(t[i]) : 0
    tMap.set(t[i], count + 1)
  }
  
  const req = tMap.size
  let check = 0
  
  let l = 0; r = 0
  
  const sMap = new Map()
  
  const ans = [-1, 0, 0]
  
  while (r < s.length) {
    const char = s[r]
    const count = sMap.get(s[r]) ? sMap.get(s[r]) : 0
    sMap.set(s[r], count + 1)
    
    if (tMap.has(char) && sMap.get(char) == tMap.get(char)) {
      check++
    }
    
    while (l <= r && check == req) {
      const char = s[l]
      if (ans[0] == -1 || r - l + 1 < ans[0]) { // if there is no solution set yet,
        ans[0] = r - l + 1                      // or if the current substring is shorter than the  solution
        ans[1] = l
        ans[2] = r
      }
      
      sMap.set(char, sMap.get(char) - 1)
      if (tMap.has(char) && sMap.get(char) < tMap.get(char)) {
        check--
      }
      l++
    }
    r++
  }
  return ans[0] == -1 ? "" : s.slice(ans[1], ans[2] + 1)
};