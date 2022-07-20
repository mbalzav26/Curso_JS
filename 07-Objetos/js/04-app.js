// Extraer propiedades de un objeto y asignar a variables

const objeto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true
}

// forma anterior

const nombre1 = objeto.nombre;
console.log(nombre1);

// forma nueva con ES6

// utilzamos el destructuring para extraer las propiedades y ademas crea las variables

const {nombre, precio, disponible} = objeto;
console.log(`Forma nueva: ${nombre}, ${precio}, ${disponible}`);