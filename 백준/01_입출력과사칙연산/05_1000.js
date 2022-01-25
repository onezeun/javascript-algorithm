const fs = require('fs');
const inputData = fs.readFileSync('./05_1000.txt').toString().split(' ');
//parseInt()함수 : 자바스크립트에 내장되어 있는 함수로, 말 그대로 문자열을 파싱하여 문자열에 포함된 숫자를 찾아서 number로 형변환을 시켜준다.

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);