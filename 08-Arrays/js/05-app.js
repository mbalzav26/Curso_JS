// Añadir nuevos elementos al fin o Inicio de un array

// Esta es la forma imperativa de agregar elementos al inicio o al fin de un array

const meses = ["enero", "febrero", "marzo"];

// para agregar al inicio del array

meses.unshift("primer mes");

// para agregar al final del array
meses.push("ultimo mes");

console.log(meses);

// --------------------------------------------------

// un ejemplo practico seria un carrito de compras

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

carrito.push(producto, producto2);

// para agregar al inicio
carrito.unshift(producto3);

console.table(carrito);