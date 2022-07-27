// .reduce method

/* toma una cantidad de datos los une
y te entrega un resultado */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// sacar un total por forEach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

// sacar un total por reduce

const totalProducto = carrito.reduce((total, producto) => total + producto.precio,0);
console.log(`el total es: ${totalProducto}`);