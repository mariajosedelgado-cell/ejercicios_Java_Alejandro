const prompt = require ("prompt-sync")({sigint:true});

let numero = Number(prompt("Ingrese un numero del 1 al 10:"));
let factorial = 1;
let operacion = "";

for(let i=1; i <= numero; i++){
    factorial = factorial * i;
    operacion = operacion + i;
    if(i < numero){
        operacion = operacion + "*";
    }
}
console.log(operacion + "*" + factorial);