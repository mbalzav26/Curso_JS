// metodo map para los arrays

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
 
const areglo = carrito.map(function(p){
    return `producto ${p.nombre} + precio ${p.precio}`;
 })

 console.log(areglo);

 // si queremos solo los nombres de los productos
const nombres = carrito.map(function(p){
    return p.nombre;
})

console.log(nombres);

// si queremos hacer lo mismo con forEach nos marca undifined

const areglo2 = carrito.forEach(function(p){
    return `producto ${p.nombre} + precio ${p.precio}`;
 })

 console.log(areglo2);