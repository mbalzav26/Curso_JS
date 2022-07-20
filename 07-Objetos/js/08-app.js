// para que no acepte variables sin definir usamos el use strict en la parte superior de la app.js

"use strict";

const objeto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true
}

/* para congelar un objeto usamos la propiedad Object.freeze
para que se comporte como una constante y que no se pueda modificar */

Object.freeze(objeto);

// objeto.nombre = "Monitor de 20 pulgadas";
// delete objeto.disponible;

console.log(objeto);

// El objeto no puede ser modificado

// Preguntar si el objeto esta modificado

console.log(Object.isFrozen(objeto));




