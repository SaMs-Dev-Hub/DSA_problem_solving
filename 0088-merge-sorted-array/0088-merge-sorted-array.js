/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let nums10 =nums1.slice(0,m);
    let j=0;
    let k=0;
    for(let i=0;i<m+n ;i++){
        if(k>=n ||(j<m && nums10[j] <= nums2[k])){
          nums1[i]= nums10[j]
          j++
        }else  {
            nums1[i] = nums2[k];
            k++
        }
    }
};