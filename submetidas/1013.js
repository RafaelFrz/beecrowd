var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let maiorab = ((a + b) + Math.abs(a - b))/2;

maior = (maiorab > c) ? `${maiorab} eh o maior` : `${c} eh o maior`

console.log(maior);
