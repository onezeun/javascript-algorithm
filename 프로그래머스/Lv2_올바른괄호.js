function solution(s) {
  const stack = []; // 스택을 활용하기 위해 스택 배열 생성

  // 문자열 s를 순서대로 뽑기 위해 forof 함수 사용
  for (const c of s) {
    if (c === '(') {
      stack.push(c);
      // 스택이 비어있을 경우에 대한 예외 처리
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// 조금 더 메모리를 적게 사용하기

// function solution(s) {
//   let count = 0;

//   for (const c of s) {
//     if (c === '(') {
//       count += 1;
//       // 스택이 비어있을 경우
//     } else if (count === 0) {
//       return false;
//     }
//     count -= 1
//   }

//   return count === 0;
// }
