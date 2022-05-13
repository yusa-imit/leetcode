 var substring = function(s) {
  const map = {};
  for(){
      // 필터 해쉬맵 구성
  }
  let counter =  // substring이 유효한 지 확인하는 변수 
  let begin = 0, end = 0 // 더블 포인터, 앞부분 뒷부분의 인덱스
  let d= // 현재 유효한 서브스트링의 길이 (최소 길이를 구해야 하는 경우 INT_MAX, 최대 길이를 구해야 하는 경우 0)
  while(end<s.length){
      if(map[s[end]]===undefined) map[s[end]] = 0;
      if(map[s[end]]-- >0) counter--;
      end++

      while(counter==0){

          if(end-begin<d){
              head=begin;
              d=end-head;
          }
          if(map[s[begin++]]++==0){
              counter++};
      }

  }

  return d===Number.MAX_SAFE_INTEGER?"":s.substring(head, head+d);
};