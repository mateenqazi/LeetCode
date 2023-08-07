var romanToInt = function(s) {
 const values = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }    
    
    s = s.replace('IV','IIII').replace('IX','VIIII')
    s = s.replace('XL','XXXX').replace('XC','LXXXX')
    s = s.replace('CD','CCCC').replace('CM','DCCCC')
    
    let count=0
    for(let s1 of s)
        count += values[s1]
    
    return count

};