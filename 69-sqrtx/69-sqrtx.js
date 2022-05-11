/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0
  let r = x
  let m
  
  while (l < r - 1) {
    m = Math.floor((l + r) / 2)
    if (m * m === x) return m
    else if (m * m < x) l = m
    else r = m
  }
  
  if (r * r === x) return r
  else return l
};

