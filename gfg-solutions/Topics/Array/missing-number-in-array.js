class Solution{
    missingNumber(array,n){
      let actualSum= (n*(n+1))/2;
      let expectedSum=0;
      for (let i=0;i<array.length;i++){
          expectedSum+=array[i]
      }
      return  actualSum-expectedSum
    }
}