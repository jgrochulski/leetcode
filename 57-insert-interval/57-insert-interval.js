/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  
  let start = newInterval[0]
  let end = newInterval[1]
  
  if (intervals.length === 0) {
    return [newInterval]
  }
  if (end < intervals[0][0]) {
    return [newInterval, ...intervals]
  }
  if (start > intervals[intervals.length - 1][1]) {
    return [...intervals, newInterval]
  }
  
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
  return [...left, [start, end], ...right]
  
};