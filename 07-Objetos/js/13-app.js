// Otros metodos para los objetos

const product = {
    nombre: "monitor",
    precio: 100,
    disponible: true
}

// para obtener las llaves parte izquierda

console.log(Object.keys(product));

// para obtener los valores parte derecha

console.log(Object.values(product));

// Para consultar tanto llaves con valores

console.log(Object.entries(product));