/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0
  let r = height.length - 1
  let res = 0
  
  while (l < r ) {
    
    area = (r - l) * Math.min(height[l], height[r])
    res = area > res ? area : res
    
    if (height[r] < height[l]) r--
    else if (height[r] > height[l]) l++
    else {
      if (height[r-1] < height[l+1]) r--
      else l++
    }
  }
  return res
};