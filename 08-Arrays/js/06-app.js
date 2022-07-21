// Crear un nuevo arreglo con el spread operator

/* usamos el spread operator ya que es una f
orma declarativa de crear un nuevo arreglo */

const carrito = [];

const producto = {
    nombre: "monitor",
    precio: 300,
}

const producto2 = {
    nombre: "tv",
    precio: 3000,
}

const producto3 = {
    nombre: "telefono",
    precio: 400,
}

const producto4 = {
    nombre: "cargador",
    precio: 40,
}

/* creamos una variable para almacenar el array*/

let resultado;

resultado = [...carrito, producto, producto2];

/* para agregar un nuevo elemento al 
array usamos la varibale que creamos */

resultado = [...resultado, producto3];

/* si queremos que un elemento quede al inicio del array 
los colocamos delante la variable que reescrimos */

resultado = [producto4, ...resultado];

console.table(resultado);