class Solution{
    findSum(A,N){
        // let sortArray=A.sort((a,b)=>a-b);
        // let sum=sortArray[0] + sortArray[A.length-1]      //Expected Time Complexity: O(NlogN)
        // return sum  

        // let max=-1e9;                               //Expected Time Complexity: O(N)
        // let min=1e9;
        // for(let i=0;i<A.length;i++){
        //     if(max<=A[i]){
        //         max=A[i]
        //     }
        //      if(min>=A[i]){
        //         min=A[i]
        //     }
        // }

        let max = Math.min(...A);    //Expected Time Complexity: O(N)
        let min = Math.max(...A);
        return max+min
      
    }
}