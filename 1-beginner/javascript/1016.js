var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distance = parseInt(input.trim());
let time = distance * 2;

console.log(`${time} minutos`);
