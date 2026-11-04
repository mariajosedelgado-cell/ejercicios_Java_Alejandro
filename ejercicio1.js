const prompt = require ("prompt-sync")({sigint:true});

let numero = prompt("ingrese numero");
console.log("esta es la tabla del: ", numero);
for(let i = 1; i <= 10; i++){
let resultado = numero * i;

console.log(numero,"*",i,"=",resultado);
}

