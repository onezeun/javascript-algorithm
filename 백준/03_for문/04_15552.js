const fs = require('fs');
let input = fs.readFileSync('./04.txt').toString().split('\n');

let max = parseInt(input[0])
let answer ='';

//하나의 문자열에 결과값과 개행문자를 넣어 출력하기
for(let i = 1; i <= max; i++) {
  let nums = input[i].split(' ');
  answer += parseInt(nums[0]) + parseInt(nums[1]) + '\n';
}

console.log(answer);