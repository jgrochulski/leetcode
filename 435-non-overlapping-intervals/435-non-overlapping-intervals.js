/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  const sorted = intervals.sort((a,b) => {
    return a[0] - b[0]
  })
  
  let end = sorted[0][1];
  let count = 0;
  
  for (let i = 1; i < sorted.length; i++) {
    if (end > sorted[i][0]) {
      count++
      end = Math.min(end, sorted[i][1])
    }
    else {
      end = sorted[i][1]
    }
  }
  return count
};