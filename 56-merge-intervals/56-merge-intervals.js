/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  
  if (intervals.legnth === 1) return intervals
  
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  // console.log(intervals)
  merge(intervals)
  // console.log(intervals)


  function merge(intervals) {
    const arr = []

    let i = 0;

    while (i < intervals.length - 1) {
      if (intervals[i][1] >= intervals[i+1][0]) {
        intervals[i][1] = Math.max(intervals[i][1], intervals[i+1][1])
        intervals.splice(i+1, 1)
      }
      else {
        i++
      }
    }
  }
  return intervals
};