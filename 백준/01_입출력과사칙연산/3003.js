const fs = require('fs');
const input = fs.readFileSync(__dirname + '/example.txt').toString().split(' ').map(Number);
// map() : 배열 내 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열로 리턴
// 배열.map((요소, 인덱스, 배열) => { return 요소 });

let chess = [1, 1, 2, 2, 2, 8];

let answer = input.map((i, index) => {
  return chess[index] - i;
})

console.log(...answer)