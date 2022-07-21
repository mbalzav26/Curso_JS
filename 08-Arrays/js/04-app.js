// agregar nuevo elemento a un array

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];

// Para agregar un nuevo elemento identificamos el indice del arreglo

meses[0] = 'primer mes';

// poder agregar un nuevo elemento al final del arreglo
meses[7] = 'ultimo mes';

/* en js si colocas un nuevo elemento 
en un indice que no es consecutivo salta automaticamente a ese indice */

meses[10] = 'nuevo mes';

// en otros lenguajes se colocan los espacio en blanco como null

console.log(meses);