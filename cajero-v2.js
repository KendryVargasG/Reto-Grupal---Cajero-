const prompt = require('prompt-sync')();

//funciones
function pedirNumero(mensaje){
    let numero = Number(prompt(mensaje));
    return numero;
}


function calcular(n1,op,n2){
    if (op === "+") {
        return n1 + n2;
    } else if (op === "-") {
        return n1 - n2;
    } else if (op === "*") {
        return n1 * n2;
    } else if (op === "/") {
        if (n2 === 0) {
            return "No se puede dividir entre cero";
        } else {
            return  n1 / n2;
        }
    } else {
        return "Operación no válida";
    }
}

function mostrarResultado(resultado){
    console.log("Resultado:", resultado);
    return
}

function atenderOperacion(){
    let n1 = pedirNumero("Ingresa un número: ");
    let op = prompt("Ingrese la operacion a realizar(+, -, *, /): ");
    let n2 = pedirNumero("Ingresa otro número: ");
    let resultado = calcular(n1, op, n2);
    mostrarResultado(resultado);
}

// bucle e impresion

let activo = true;

while (activo) {
    atenderOperacion();

    const respuesta = prompt("¿Quieres realizar otra operación? (s/n): ")
        .trim()
        .toLowerCase();
    activo = respuesta === "s";
}
