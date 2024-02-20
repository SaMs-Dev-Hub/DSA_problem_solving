class Solution{
    rotate(arr,n){
       let i = 0;
       let j=n-1;
       while(i!==j){
          let temp=arr[i]
       
       arr[i]= arr[j]
       
       arr[j]=temp;
       i++
       }
       return arr ;
    }
}
//Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)