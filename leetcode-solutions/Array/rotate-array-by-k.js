var rotate = function(nums, d) {
    let temp=[];
    let  n=nums.length
    let k=d%n;
    if(n>1){
 for(let i=n-k;i<n;i++){
        temp.push(nums[i])
    }
 for(let i=n-1;i>=k;i--){
    nums[i]=nums[i-k]
 }
 for(let i=0;i<k;i++){
    nums[i]=temp[i]
 }
   
    return nums
    }else{
        return nums
    }
   
};