/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     let i=0;
    let count=0;
for(let j=1 ; j<nums.length; j++){
    console.log(count)
    if(nums[i] === nums[j] && count < 1){
      i++;
      nums[i] = nums[j];
      count++
    }else if(nums[i] !== nums[j]){
           i++
          nums[i] = nums[j];
        count= count <= 0 ? 0 : --count
    }
}
    return i+1
};