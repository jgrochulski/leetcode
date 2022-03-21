/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let start = newInterval[0]
  let end = newInterval[1]
  let left = []
  let right = [] 
  
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
  
  console.log(left)
  console.log([start, end])
  console.log(right)
  
  
  return left.concat([[start, end]].concat(right))
  
  
};

/*
1,3 7,9
4,6

*/