// forEach en lod arrays

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 100 },
    { nombre: 'Televisor', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
]
// usando el for es menos dinamico a la hora de nombrar las variables
for (let i = 0; i < carrito.length; i++){
    console.log(`producto ${carrito[i].nombre} + precio ${carrito[i].precio}`);
}

console.log("===========================================================");

 // usamos el forEach para recorrer el array es mas dinamico

 carrito.forEach(function(p){
    console.log(`producto ${p.nombre} + precio ${p.precio}`);
 })