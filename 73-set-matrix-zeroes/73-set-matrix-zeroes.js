/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // console.log(matrix)
  
  const R = matrix.length
  const C = matrix[0].length
  
  const rows = new Set()
  const cols = new Set()
  
  
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }
  
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
};