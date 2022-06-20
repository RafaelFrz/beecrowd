var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notas = [100, 50, 20, 10, 5, 2, 1];

let valor = lines.shift();
console.log(valor);

for (let index = 0; index < notas.length; index++) {
    cedulas = Math.trunc(valor / notas[index]);
    valor = valor - (notas[index] * cedulas);
    console.log(`${cedulas} nota(s) de R$ ${notas[index]},00`);
}
