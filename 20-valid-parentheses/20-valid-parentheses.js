/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) return false
    
    const pairs = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (!!pairs[s[i]]) {
            if (stack.length === 0) return false
            else if (stack[stack.length - 1] === pairs[s[i]]) {
                stack.pop()
            }
            else return false
        }
        else {
            stack.push(s[i])
        }
    }
    return stack.length === 0
};