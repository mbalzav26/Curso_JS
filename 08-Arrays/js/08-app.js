// Destructuring de Arrays

// Destructuring de objetos
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

// Destructuring de Arrays

/* A diferencia de lo objeto cada variable 
toma la posicion de cada indice */

const array = [1,2,3,4,5];

// para acceder al primer elemento

const [uno] = array;
console.log(uno);

// accerder a cualquier elemento

const [,,tres] = array;
console.log(tres);

const [primer, ,, cuatro] = array;
console.log(primer, cuatro);

/* cada coma representa que ese espacio no sera tomado en cuenta */

// para tomar todos los elementos restantes

const [f,s, ...resto] = array;
console.log(resto);

// en este ejemplo el spread operator toma los elemento que no fueron seleccionados
