/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// -4 -1 -1 0 1 2
var threeSum = function (nums) {
  let ll = 0,
    rr = nums.length - 1;
  const sorted = [...nums].sort((a, b) => a - b);
  let answer = [];
  let dic = [];
  while (true) {
    if (rr < ll) break;
    const sum = sorted[ll] + sorted[rr];
    const target = 0 - sum;
    if (!nums.includes(target)) {
      sum < 0 ? ll++ : rr--;
      continue;
    } else {
      let current = [];
      let copyNum = [...nums];
      const indexL = copyNum.indexOf(sorted[ll]);
      copyNum[indexL] = null;
      const indexR = copyNum.indexOf(sorted[rr]);
      copyNum[indexR] = null;
      const indexT = copyNum.indexOf(target);
      if (
        indexL === -1 ||
        indexR === -1 ||
        indexT === -1 ||
        indexL === indexR ||
        indexT === indexL ||
        indexR === indexT
      ) {
        sum < 0 ? ll++ : rr--;
        continue;
      }
      const ans = [nums[indexL], nums[indexR], nums[indexT]].sort(
        (a, b) => a - b
      );
      if (!dic.includes(JSON.stringify(ans))) {
        answer.push(ans);
        dic.push(JSON.stringify(ans));
      }
      sum < 0 ? ll++ : rr--;
    }
  }
  return answer;
};
