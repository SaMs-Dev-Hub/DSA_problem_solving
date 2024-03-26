var moveZeroes = function(nums) {
    //store all non zeron in temp;
    let temp=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            temp.push(nums[i])
        }
    }
      //put back non zero in nums array;
      for(let i=0;i<temp.length;i++){
        nums[i]=temp[i]
      }
      // add zeros from last non zero to length
      for(let i=temp.length;i<nums.length;i++){
        nums[i]=0
      }
      return nums
    };