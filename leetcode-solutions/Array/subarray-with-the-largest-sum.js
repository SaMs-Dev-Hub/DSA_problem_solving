
var maxSubArray = function(nums) {
    let currentSum=nums[0];
   let maxSum=nums[0];

   for(let i=1;i<nums.length;i++){

     currentSum = nums[i] > currentSum + nums[i] ? nums[i] : currentSum +nums[i]

     if(currentSum>maxSum){
         maxSum=currentSum
     }
     
   }
   return maxSum
};