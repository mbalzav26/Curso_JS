// .findIndex para encontrar la posicion de un elemento en un arreglo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// forma manual

meses.forEach((mes, i)=> {
    if (mes === 'Febrero') {
        console.log(`Encontrado en indice ${i}`);
    }
})

// forma con findIndex

const indice = meses.findIndex(mes => mes === 'Febrero');
console.log(indice);

const produ = carrito.findIndex( p => p.nombre === 'Celular');
console.log(`encontrado en el ${produ}`);
