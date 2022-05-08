/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s
  
  const rowHolder = new Array(numRows).fill("")
  
  let down = true
  let row = 0
  
  for (let i = 0; i < s.length; i++) {
    rowHolder[row] = rowHolder[row] + s[i]
    if (down) {
      if (row === numRows - 1) {
        down = false
        row--
      }
      else row++
    }
    else {
      if (row === 0) {
        down = true
        row++
      }
      else row --
    }
  }
  console.log(rowHolder)
  return rowHolder.join("")
};