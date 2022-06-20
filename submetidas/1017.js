var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoViagem = lines.shift();
let velocidadeMedia = lines.shift();

let qtdLitros = tempoViagem * velocidadeMedia;
let gastoCombustivel = qtdLitros / 12;

console.log(gastoCombustivel.toFixed(3));
