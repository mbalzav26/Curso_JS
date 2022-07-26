// Map y forEach en arrows function

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 100 },
    { nombre: 'Televisor', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
]

/* aunque el comportamiento parezca el mismo que con forEach,
 la diferencia esta que en map te crea un arreglo nuevo */
 
const areglo = carrito.map(p => `producto ${p.nombre} + precio ${p.precio}`)

 console.log(areglo);

 // si queremos solo los nombres de los productos
const nombres = carrito.map(p =>  `${p.nombre}`)

console.log(nombres);

// si queremos hacer lo mismo con forEach nos marca undifined

carrito.forEach( p =>  console.log(`producto ${p.nombre} + precio ${p.precio}`))