/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "I" && i < s.length - 1) {
            if ( s[i+1] == "V") {
                value += 4
                i++
            }
            else if ( s[i+1] == "X") {
                value += 9
                i++
            }
            else value += 1
        }
        else if (s[i] == "X" && i < s.length - 1) {
            if ( s[i+1] == "L") {
                value += 40
                i++
            }
            else if ( s[i+1] == "C") {
                value += 90
                i++
            }
            else value += 10
        }
        else if (s[i] == "C" && i < s.length - 1) {
            if ( s[i+1] == "D") {
                value += 400
                i++
            }
            else if ( s[i+1] == "M") {
                value += 900
                i++
            }
            else value += 100
        }
        else if (s[i] == "V") value += 5
        else if (s[i] == "L") value += 50
        else if (s[i] == "D") value += 500
        else if (s[i] == "M") value += 1000   
        
        else if (s[i] == "I") value += 1
        else if (s[i] == "X") value += 10
        else if (s[i] == "C") value += 100
        
        
        
    }
    return value
};