/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 2) return true
    
    s = s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    
    let left = 0
    let right = s.length - 1
    
    console.log(s)
    
    while (left < right) {
        if (s[left] != s[right]) return false
        left++
        right--
    }
    
    return true
    
};