// operador ternario

// forma mas simple de hacer el if

let autenticado = false;
let metodoPago = false;

console.log(autenticado && metodoPago? "auntenticado" : "no autenticado" );
console.log(autenticado || metodoPago? "auntenticado" : "no autenticado" );
// operador ternario anidado

console.log(autenticado? metodoPago? "autenticado y puede pagar" : "autenticado pero no puede pagar" : "no autenticado" );