var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [cod1, qtd1, valor1] = pegarValores(lines.shift());
let [cod2, qtd2, valor2] = pegarValores(lines.shift());

let total = (qtd1 * valor1) + (qtd2 * valor2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
