var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift();
let salario = Number(lines.shift());
let vendas = Number(lines.shift());
let comissao = salario + (vendas * 0.15);

console.log(`TOTAL = R$ ${comissao.toFixed(2)}`)
