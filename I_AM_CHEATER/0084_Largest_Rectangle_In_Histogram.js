/**
 * Monotonique stack!
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0);
  let mono = [];
  let rec = 0;
  for (var i = 0; i < heights.length; i++) {
    while (mono && heights[mono[mono.length - 1]] > heights[i]) {
      let idx = mono.pop();
      /**
       * 대부분의 case에서
       * i번째의 원소는 직사각형 크기 계산에 포함되지 않기 때문에
       * i-1에서 mono의 마지막 원소의 인덱스를 뺀 것이 직사각형의 가로 길이가 된다
       *
       * 하지만, 계산할 스택의 원소가 없는 경우,
       * 현재까지 탐색한 원소 중 가장 작은 원소를 만나 0 ~ i-1  원소 중 가장 높이가 작은 직사각형의 크기를 측정하는 경우이다.
       * 이 경우 길이를 셀 때는 i을 가로 길이로 사용할 수 있다.
       *
       */
      rec = Math.max(
        rec,
        (mono.length === 0 ? i : i - mono[mono.length - 1] - 1) * heights[idx]
      );
    }
    mono.push(i);
  }
  return rec;
};
