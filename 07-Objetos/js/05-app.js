// Objetos dentro de otro objeto (anidados)

const objeto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true,
    info: {
        marca: "LG",
    }
}

console.log(objeto);

/* Para acceder al objeto dentro del objeto
 usamos las sintaxis de punto */

 console.log(objeto.info.marca);