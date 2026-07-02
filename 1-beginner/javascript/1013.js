var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines[0].trim().split(" ");

let a = parseInt(value[0]);
let b = parseInt(value[1]);
let c = parseInt(value[2]);

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let result = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${result} eh o maior`)
