var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let id = Number(lines.shift());
let horas = Number(lines.shift());
let valorHoras = Number(lines.shift());
let salario = horas * valorHoras;

console.log(`NUMBER = ${id}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
