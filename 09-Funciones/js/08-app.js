// Ejemplo con múltiples funciones que se pasan valores

function sumar(a,b){
    return a + b;
}

resultado = sumar(20,10);

console.log(resultado);

// ejemplo de carrito de compras

let total = 0;

function carrito (precio){
    return total += precio;
}

function impuesto (total){
    return total * 1.19;
}

total = carrito(200);
total = carrito(300);
total = carrito(400);
total = carrito(500);

resultadoFinal = impuesto(total);

console.log(`El total es ${resultadoFinal}`);

console.log(total);