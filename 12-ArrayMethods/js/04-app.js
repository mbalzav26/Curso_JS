// .filter() method

// te crea un nuevo arreglo basado en el parametro evaluado

/* a diferencia de findIndex el filter te crea un array nuevo
con los objetos filtrados*/ 

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// sacar con findIndex

const index = carrito.findIndex(p => p.nombre === 'Celular');
console.log(index);

// sacar con filter
let productos; 

productos = carrito.filter(p => p.precio > 300);
productos = carrito.filter(p => p.nombre !== 'Celular' && p.nombre !== 'Teclado');
productos = carrito.filter(p => p.nombre === 'Celular' || p.nombre === 'Teclado');

console.log(productos);



