var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let values = input.trim().split(/\s+/);

let x1 = parseFloat(values[0]);
let y1 = parseFloat(values[1]);
let x2 = parseFloat(values[2]);
let y2 = parseFloat(values[3]);

let p1 = (x2 - x1) ** 2;
let p2 = (y2 - y1) ** 2;

let distance = Math.sqrt(p1 + p2);

console.log(distance.toFixed(4));
