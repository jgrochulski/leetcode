/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const arr = new Array(n).fill(true)
    let count = 0
    
    for (let i = 2; i * i < arr.length; i++) {
      if (!arr[i]) continue
      else {
        for (let j = i; j * i < arr.length; j++) {
          arr[i * j] = false
        }
      }
    }
  
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === true) {
      count++
    }
  }
  
  return count
};