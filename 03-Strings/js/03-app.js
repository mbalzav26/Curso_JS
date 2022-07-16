const product = 'monitor 24"';
const precio = '300 USD';

// Existen formas de concatenar cadenas

// La mas comun es usar el +

console.log("el " + product + " cuesta " + precio);

// Otra forma es usar la funcion `concat`

console.log("el " , product.concat(" vale " + precio));

// La forma actual es usando el template string gracias al ECMAscript 6

console.log(`el ${product} vale ${precio}`);

// Todas estas formas validas y se obtiene el mismo resultado

