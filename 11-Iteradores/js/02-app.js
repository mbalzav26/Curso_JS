// break y continue; en un for loop

for(i = 0; i < 10; i++){
    if(i === 5){
        console.log('este es el 5');
        continue;
    }
    console.log(`numero: ${i}`);
}

console.log('\n');

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 100 },
    { nombre: 'Televisor', precio: 200, descuento: true },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600, descuento: true },
]

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(`${carrito[i].nombre}`);
}