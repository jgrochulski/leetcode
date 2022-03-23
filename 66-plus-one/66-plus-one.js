/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1;
  let arr = [...digits];
  
  recursive();
    
  function recursive() {
    if (arr[i] == 9) {
      arr[i] = 0;
      if (i != 0) {
        i--;
        recursive();
      }
      else {
        arr.unshift(1);
      }
    }
    else {
      arr[i] = arr[i] + 1;
    }
  }
  return arr;
};