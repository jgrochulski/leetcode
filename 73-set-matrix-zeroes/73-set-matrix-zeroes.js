/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let colZero = 1
  const rows = matrix.length, cols = matrix[0].length
  
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] == 0) {
      colZero = 0
    }
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  
  // console.log(matrix)
  
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j > 0; j--) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0
      }
    }
    if (colZero == 0) {
      matrix[i][0] = 0
    }
  }
};