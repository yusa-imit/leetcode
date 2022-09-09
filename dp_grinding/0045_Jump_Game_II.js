/**
 * @param {number[]} nums
 * @return {number}
 */


// double loop
// almost O(n^2)

/**
var jump = function(nums) {
    const arr = new Array(nums.length).fill(Infinity);
    arr[0] = 0;
    for(var i=0; i<nums.length; ++i){
        //console.log(arr);
        if(arr[nums.length-1]!==Infinity) break;
        for(var j=1;j<=nums[i]; ++j){
            if(arr[i+j]>arr[i]+1) arr[i+j] = arr[i]+1;
        }
    }
    return arr[nums.length-1];
};
*/

// greedy
var jump = function(nums){
  let answer = 0;
  let cur=0, far = 0;
  for(var i=0; i<nums.length-1; i++){
      far = Math.max(far, i+nums[i]);
      if(i===cur){
          answer++;
          cur = far;
      }
  }
  return answer;
}