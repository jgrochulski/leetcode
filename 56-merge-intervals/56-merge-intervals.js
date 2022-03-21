/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals1) {
  
  if (intervals1.legnth === 1) return intervals
  
  const intervals = intervals1.sort((a, b) => {
    return a[0] - b[0]
  })
  
  let start = intervals[0][0]
  let end = intervals[0][1]
  
  const left = []
  const right = []
  
  for (let i = 1; i < intervals.length; i++) {
    if (end >= intervals[i][0]) {
      end = Math.max(end, intervals[i][1])
    }
    else {
      left.push([start, end])
      start = intervals[i][0]
      end = intervals[i][1]
    }
  }
  return [...left, [start, end]]
};