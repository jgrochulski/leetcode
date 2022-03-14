/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  
  transpose(matrix, n)
  reverse(matrix, n)
  
};

let transpose = function(matrix, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const holder = matrix[j][i]
      matrix[j][i] = matrix[i][j]
      matrix[i][j] = holder
    }
  }    
}

let reverse = function(matrix, n) {
  const mid = Math.floor(n / 2)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < mid; j++) {
      const holder = matrix[i][n-j-1]
      matrix[i][n-j-1] = matrix[i][j]
      matrix[i][j] = holder        
    }
  }  
}