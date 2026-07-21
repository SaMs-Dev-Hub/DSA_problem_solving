var romanToInt = function(s) {
    let obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let num = obj[s[0]];
    let prev = obj[s[0]];
    for(let i = 1; i < s.length; i++) {
        if (prev < obj[s[i]]) {
            num += obj[s[i]] - 2 * prev;
        } else {
            num += obj[s[i]];
        }
        prev = obj[s[i]];
    }
    return num;
};
