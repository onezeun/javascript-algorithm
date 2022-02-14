// 괄호

const fs = require('fs');
const input = fs.readFileSync('./03.txt').toString().split('\n');

// shift() : 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
const A = input.shift();
const answer = [];

for (let i = 0; i < A; i++) {
  let count = 0;

  for (let j of input[i]) {
    count += j === '(' ? 1 : -1;

    if (count < 0) break;
  }

  answer.push(count === 0 ? 'YES' : 'NO');
}

// join() : 배열의 모든 요소를 연결해 하나의 문자열로 만듦
console.log(answer.join('\n'));
