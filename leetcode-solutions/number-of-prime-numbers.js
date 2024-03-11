
var countPrimes = function(n) {
    let booleans = []
   let count = 0
 
   for (let i = 0; i < n; i++) {
     booleans.push(true)
   }
 
   for (let i = 2; i <= Math.sqrt(n); i++) {
     if (booleans[i]) {
       for (let j = i * i; j < n; j += i) {
         booleans[j] = false
       }
     }
   }
 
   for (let i = 2; i < n; i++) {
     if (booleans[i]) {
       count++
     }
   }
 
   return count
 };