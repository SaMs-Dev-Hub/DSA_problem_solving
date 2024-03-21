class Solution {
    binarysearch(arr, n, k) {
      let firstIndex = 0;
        let lastIndex = n - 1;
        while (firstIndex <= lastIndex) {
            let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
            if (k === arr[middleIndex]) {
                return middleIndex;
            } else if (k < arr[middleIndex]) {
                lastIndex = middleIndex - 1;
            } else {
                firstIndex = middleIndex + 1;
            }
        }
        return -1;
    }
}