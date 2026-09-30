const prompt = require('prompt-sync')();

// Variables

let activo = true;

let numero1;
let operacion;
let numero2;
let resultado;


// Logica

while (activo) {

    numero1 = Number(prompt("Ingresa el primer número: "));
    operacion = prompt("Ingresa la operación (+, -, *, /): ");
    numero2 = Number(prompt("Ingresa el segundo número: "));

    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else if (operacion === "*") {
        resultado = numero1 * numero2;
    } else if (operacion === "/") {
        if (numero2 === 0) {
            resultado = "No se puede dividir entre cero";
        } else {
            resultado = numero1 / numero2;
        }
    } else {
        resultado = "Operación no válida";
    }


    // Impresion

    console.log("Resultado:", resultado);

    let continuar = prompt("¿Quieres realizar otra operación? (si/no): ");

    if (continuar.toLowerCase() === "no") {
        activo = false;
    }
}

console.log("Listo todo :D");