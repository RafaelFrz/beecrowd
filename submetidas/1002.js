var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = Number(lines.shift());
let pi = 3.14159;
let area = pi * (raio * raio);

console.log(`A=${area.toFixed(4)}`);
