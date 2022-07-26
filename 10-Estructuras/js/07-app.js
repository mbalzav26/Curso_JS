// operador or ||

let dinero = 300;
let credito = 400;
let disponible = dinero + credito;
let totalPagar = 1000;

if ( dinero > totalPagar || credito > totalPagar || disponible > totalPagar ) {
    console.log('Pago aceptado');
} else {
    console.log('Pago rechazado');
}