/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let kArr = [];
  let kNum = k;
  let mod = 0;
  while (kNum > 0) {
    mod = kNum % 10;
    kArr.unshift(mod);
    if (kNum / 10 >= 1) {
      kNum = Math.floor( kNum / 10 )
    }
    else {
      kNum = 0;
    }
  }
  if (kArr.length > num.length) {
    let i = kArr.length - num.length;
    while (i > 0 ) {
      num.unshift(0);
      i--;
    }
  }
  else if (kArr.length < num.length) {
    let i = num.length - kArr.length
    while (i > 0) {
      kArr.unshift(0);
      i--;
    }
  }
    
  let j = kArr.length - 1
  let carry = 0;
  let ans = [...num];
  
  recursive();
  
  
  function recursive() {
    ans[j] = ( num[j] + kArr[j] + carry)  % 10;
    if (num[j] + kArr[j] + carry >= 10) {
      carry = 1;
      if (j == 0) {
        ans.unshift(1);
      }
    }
    else {
      carry = 0;
    }
    j--;
    if (j >= 0) {
      recursive();
    }
  }
  
  return ans;
    
};