// forEach y map

const tareas = ["leer", "dormir", "comer"];

tareas.forEach((t,a) =>{
    console.log(`${a} : ${t}`);
})

// si es de una sola linea se puede escribir asi:

const pen = ["leer", "dormir", "comer"];

pen.forEach(t => console.log(t));

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 100 },
    { nombre: 'Televisor', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
]

let nuevoA = carrito.forEach(c => console.log(c));

let nuevoA2 = carrito.map(c => console.log(c));

console.log(nuevoA);
console.log(nuevoA2);