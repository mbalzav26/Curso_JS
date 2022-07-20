// Sellar un objeto

"use strict";

const objeto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true
}

Object.seal(objeto);

objeto.nombre = "monitor LG";
objeto.precio = 500;


console.log(objeto);

// Para preguntar si esta sellado el objeto

console.log(Object.isSealed(objeto));

/* A diferencia de freeze con seal se pueden 
modificar las propiedades ya existente */