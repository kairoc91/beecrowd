var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = input.trim().split(/\s+/).map(Number);
console.log(value[0]);

let notas = [100, 50, 20, 10, 5, 2, 1];

for (let nota of notas) {
	console.log(`${Math.floor(value / nota)} nota(s) de R$ ${nota.toFixed(2).replace('.', ',')}`);
	value = value % nota;
}
