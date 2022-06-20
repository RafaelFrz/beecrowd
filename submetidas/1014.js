var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = lines.shift();
let combustivel = lines.shift();
let consumo = distancia / combustivel;

console.log(`${consumo.toFixed(3)} km/l`)
