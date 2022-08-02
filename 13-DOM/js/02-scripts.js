// Acceder a elementos con getElementByClassName

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// cuando hay mas de un elemento con la misma clase te regresa un array

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Cuando la clase no existe te regresa un array vacio
const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste);