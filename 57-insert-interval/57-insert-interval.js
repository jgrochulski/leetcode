/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let start = newInterval[0]
  let end = newInterval[1]
  const left = []
  const right = [] 
  
  for (let i = 0; i < intervals.length; i++) {
    if (start > intervals[i][1]) {
      left.push(intervals[i])
    }
    else if (end < intervals[i][0]) {
      right.push(intervals[i])
    }
    else {
      start = Math.min(start, intervals[i][0])
      end = Math.max(end, intervals[i][1])
      
    }
  }
  return left.concat([[start, end]].concat(right))
};