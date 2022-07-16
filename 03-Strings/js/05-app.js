const producto = 'monitor 24 pulgadas';

// usaremos la propierdad .replace para reemplazar una palabra 

console.log(producto.replace('pulgadas', '"'));

// usaremos la propiedad .slice para cortar letras o palbras

console.log(producto.slice(0,10));

// con .slice no podemos empezar con un numero mayor y luego uno menor

console.log(producto.slice(10,0)); // no hace nada

/* hay una alternativa para .slice y es .substring esta invierte el orden de los 
parametros y hace la funcion*/

 console.log(producto.substring(2,0));

 // Para poder extraer la primera letra de una palabra de una palabra hay dos formas
 
 // con .slice y con .substring
 console.log(producto.slice(0,1));
 console.log(producto.slice(0,1));

 // la segunda forma es con .charAt()
    
 console.log(producto.charAt(0));