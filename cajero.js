const teclado = require('prompt-sync')();
let nombre = teclado("¿Cuál es tu nombre? ");
console.log("Hola, " + nombre + "!");

let numero1 = teclado("Escriba un numero")
let operacion = teclado("Elige +,-,*,/,")
let numero2 = teclado("Escribe otro numero")
let resultado = Number(numero1) + Number(numero2)


console.log(resultado)
if(operacion == "+"){
    console.log(Number(numero1) + Number(numero2))
}
if(operacion == "-"){
    console.log(Number(numero1) - Number(numero2))
}
if(operacion == "*"){
    console.log(Number(numero1) * Number(numero2))
}
if(operacion == "/"){
    console.log(Number(numero1) / Number(numero2))
}

/*switch (operacion) {
  case "+":
    console.log(Number(numero1) + Number(numero2));
    break; // Evita que continúe ejecutando los siguientes casos
  case "-":
    console.log(Number(numero1) - Number(numero2));
    break;

    case "*":
    console.log(Number(numero1) * Number(numero2));
    break;

    case "/":
    console.log(Number(numero1) / Number(numero2));
    break;
  
}*/
