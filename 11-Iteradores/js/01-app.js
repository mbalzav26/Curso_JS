// ciclos en javascript

// ejemplo 1

for(i = 0; i < 10; i++){
    console.log(`numero ${i}`);
}

// ejemplo 2 verificar que un numero sea par
console.log("++++++++++++++++++++++++++")

for(i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(`numero ${i} es par`);
    }else{
        console.log(`numero ${i} es impar`);
    }
}

console.log("++++++++++++++++++++++++++");
// ejemplo 3 carrito

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 100 },
    { nombre: 'Televisor', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
]

for(i = 0; i <= carrito.length; i++){
    console.log(carrito[i]);
}