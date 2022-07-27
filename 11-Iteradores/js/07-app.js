// for ....of
// nos indica que estamos iterando sobre un arreglos

const pen = ["leer", "dormir", "comer"];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 100 },
    { nombre: 'Televisor', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
]

for(let p of carrito){
    console.log(p);
}

for(let c of carrito){
    console.log(c.nombre);
}
