/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let min=prices[0];
let maxCount=0;
for(let i=0;i<prices.length;i++){
    if(prices[i]-min>maxCount){
        maxCount=prices[i]-min
    }
    if(prices[i] < min){
      min=prices[i]
    }
}
return maxCount
  
};