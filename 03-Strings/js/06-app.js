const product = 'monitor de 24 pulgadas';

// .repeat() va a permitir repetir una cadena de texto

const promocion = 'gratis '.repeat(3);
console.log(promocion);

// Se puede usar template strings 

console.log(`${product} ${promocion} !!!`);

// .split() va a permitir separar una cadena de texto en un array

console.log(product.split(' '));

/* Es util para separar una cadena de texto en un array de palabras 
y los usan las redes sociales para separar los temas importantes de una publicación */

const comentario = 'JavaScript es #tremendo';
console.log(comentario.split('#'));
