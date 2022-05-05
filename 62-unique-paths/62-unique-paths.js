/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  
  // make the matrix
  const grid = []
  for (let i = 0; i < m; i++) {
    const row = new Array()
    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    grid.push(row)
  }
  
  // console.log(grid)
  
  grid[m - 1][n - 1] = 1
  
  // console.log(grid)
  
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // check valid neighbors
      // console.log("i: " + i + ", j: " + j)
      const below = i + 1 < m ? grid[i + 1][j] : 0
      const right = j + 1 < n ? grid[i][j + 1] : 0
      
      grid[i][j] = grid[i][j] + below + right
    }
  }
  
  // console.log(grid)
  
  return grid[0][0]
  
  
};