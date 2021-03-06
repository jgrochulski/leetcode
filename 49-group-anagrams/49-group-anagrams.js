/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
  if (strs.length == 1) {
    return [[strs[0]]]
  }
  
  const map = new Map()
  
  for (let i = 0; i < strs.length; i++) {
    const count = new Array(26).fill(0)
    
    for (let j = 0; j < strs[i].length; j++) {
      count[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)] += 1
    }
    
    const string = count.join(".")
    
    const current = map.has(string) ? [...map.get(string), strs[i]] : [strs[i]]
    
    map.set(string, current)
    
  }
  return [...map.values()]
};