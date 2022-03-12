/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let reversed = 0;
    let y = x;
    
    while (y > 0) {
        const last = y % 10;
        reversed = reversed * 10 + last
        y = y / 10 | 0
    }
    
    if (reversed === x) return true
    else return false
};