var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pi = 3.14159;
let raio = lines.shift();
let volume = (4.0/3.0) * pi * ((raio * raio) * raio);

console.log(`VOLUME = ${volume.toFixed(3)}`);
