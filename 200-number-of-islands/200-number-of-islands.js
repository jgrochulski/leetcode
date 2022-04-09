/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const mainSet = new Set()
  
  const rows = grid.length
  const cols = grid[0].length
  
  let count = 0
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1" && !mainSet.has(`${i}:${j}`)) {
        // console.log(i + ":" + j)
        dfs(i, j)
        count++
      }
    }
  }
  
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols) return false
    // console.log(i + ":" + j)
    if (grid[i][j] === "0") return false
    if (mainSet.has(`${i}:${j}`)) return false
    mainSet.add(`${i}:${j}`)
    
    return dfs(i-1, j) || dfs(i, j+1) || dfs(i+1, j) || dfs(i, j-1)
  }
  
  return count
};