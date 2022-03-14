/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ans = []
  const rows = matrix.length
  const cols = matrix[0].length
  const size = rows * cols
  
  let r1 = 0;
  let c1 = 0;
  let r2 = rows - 1
  let c2 = cols - 1
  
  while (ans.length < size) {
    for (let i = c1; i <= c2; i++) {
      ans.push(matrix[r1][i])
    }
    if (ans.length == size) break
    r1++
    for (let i = r1; i <= r2; i++) {
      ans.push(matrix[i][c2])
    }
    if (ans.length == size) break
    c2--
    for (let i = c2; i >= c1; i--) {
      ans.push(matrix[r2][i])
    }
    if (ans.length == size) break
    r2--
    for (let i = r2; i >= r1; i--) {
      ans.push(matrix[i][c1])
    }
    c1++ 
  }
  
  return ans
};