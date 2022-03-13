/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  if (s.length != t.length) return false
  
  const sMap = new Map()
  const tMap = new Map()
  // let ans = true;
  
  for (let i = 0; i < t.length; i++) {
    const tCount = tMap.has(t[i]) ? tMap.get(t[i]) : 0
    tMap.set(t[i], tCount + 1)
    
    const sCount = sMap.has(s[i]) ? sMap.get(s[i]) : 0
    sMap.set(s[i], sCount + 1)
  }
  
  for (const [key, value] of sMap) {
    if (tMap.get(key) != value) return false
  }
  
  // sMap.forEach((value, key) => {
  //   console.log(key + " : " + value)
  //   if (tMap.get(key) != value) {
  //     console.log("false!")
  //     ans = false
  //   }
  // })
  
  return true
  
};