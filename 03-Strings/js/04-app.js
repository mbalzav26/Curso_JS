const product = '                  monitor 24 pulgadas                  ';

console.log(product);

// Los espacios en blanco son tomados como un caracter y eso aumenta el tamaño de la cadena

console.log(product.length);

/* Existen dos formas de eliminar espacios en blanco
-----------------------------------------------------
Estas tres formas tienen poco tiempo y viene con el ecmascript 6 */

// Eliminar del inicio

console.log(product.trimStart());

// Eliminar del final

console.log(product.trimEnd());

// Eliminar del inicio y del final

console.log(product.trimStart().trimEnd());

/* Esta forma a continuacion tiene mas de 12 años y se ultiza para eliminar al inicio y al final
---------------------------------------------------- */

console.log(product.trim());
