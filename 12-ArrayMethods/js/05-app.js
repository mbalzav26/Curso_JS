// .find() method

/* te crea un nuevo arreglo basado en la condicion evaluada */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// para hacer lo mismo con forEach

// let resultado = '';

// carrito.forEach( (p,i) => {
//     if(p.nombre = 'Celular') {
//         resultado = carrito[i];
//     }
// });

// console.log(resultado);

// para hacer lo mismo con find

const producto = carrito.find(pro => pro.nombre === 'Teclado');
console.log(producto);

