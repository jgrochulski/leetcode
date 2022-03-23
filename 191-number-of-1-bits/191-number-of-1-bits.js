/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while (n) {
    n = n&(n-1)
    // n = 111 = 7 -> count = 1
    // 6 = 110
    // n = 110 = 6 -> count = 2
    // 5 = 101
    // n = 100 = 4 -> count = 3
    // 3 = 011
    // n = 000 = 0 -> return count = 3
    count++
  }
  return count
};
