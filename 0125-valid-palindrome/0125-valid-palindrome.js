/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str=s.split(/[^a-zA-Z0-9]/).join("").toLowerCase();
     console.log(str)
    if(s=="") true;
    let i=0;
    let j= str.length-1;
    while(i<j){
        if(str[i] != str[j]){
            return false
        }
        i++
        j--
       
    }
     return true
   
};