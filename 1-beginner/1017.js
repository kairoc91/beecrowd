var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let values = input.trim().split(/\s+/).map(Number);

let hours = values[0];
let speed = values[1];
let distance = speed * hours;
let fuelSpent = distance / 12;

console.log(fuelSpent.toFixed(3));
