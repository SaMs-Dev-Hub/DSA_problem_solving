/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
 k = k % nums.length 
 console.log(k)
 if(nums.length===1) return 
const myReverse =(nums,start,end)=>{
    console.log(start,end)
while(start<end){
    let temp =nums[start];
    nums[start]=nums[end];
    nums[end]= temp
    start++,
    end--
}
}

myReverse(nums,0,nums.length-k-1);
myReverse(nums,nums.length-k,nums.length-1)
myReverse(nums,0,nums.length-1)
}