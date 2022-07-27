// array methods -- some 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// el punto include solo es para arreglos sencillos

const resultado = meses.includes('Julio');
console.log(resultado);

// el punto some es para arreglos de objeto y sencillos

// forma sinplificada
const resultado2 = carrito.some(producto => producto.nombre === 'yyyy' );
console.log(resultado2);

// forma mas extensa

const resultado3 = carrito.some((p) => {
    return p.nombre === 'Celular';
})

console.log(resultado3);