//using hashmap

var twoSum = function(nums, target) {
    
    const hashmap = {};
    for(let i=0;i<nums.length;i++){
        if((target-nums[i]) in hashmap){
            return [hashmap[target-nums[i]],i];
        }
        else{
        hashmap[nums[i]]=i;
        }
    }

}