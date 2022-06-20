var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let velocidade = lines.shift();
let distancia;

distancia = velocidade * 2;

console.log(`${distancia} minutos`);
