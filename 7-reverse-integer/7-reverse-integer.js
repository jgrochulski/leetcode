/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
  let rev = 0
  
  const MAX = (2 ** 31) - 1
  const MIN = -1 * (2 ** 31)
  
  // console.log(MAX)
  // console.log(MIN)
  
  while (x != 0) {
    // console.log(x)
    // console.log(rev)
    
    const digit = x % 10
    if (x > 0) x = Math.floor(x / 10)
    if (x < 0) x = Math.ceil(x / 10)

    if (rev > MAX/10 || rev === MAX/10 && x > 7) return 0
    if (rev < MIN/10 || rev === MIN/10 && x < -8) return 0
    
    rev = rev * 10 + digit
    
  }
  
  return rev
};