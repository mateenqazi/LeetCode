/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const storedStrs = strs.map(w=> w.split('').sort().join(''))
    console.log(storedStrs)
    let obj = {}
    for(let i=0;i<strs.length;i++){
        if(!obj[storedStrs[i]]){
            obj[storedStrs[i]]    = [strs[i]]
        }
        else{
            obj[storedStrs[i]].push(strs[i])
        }
    }
    return Object.values(obj)
};