// eliminar elementos del DOM

// eliminarlo por si mismo
// const primerElemento = document.querySelector('a');
// primerElemento.remove();
// console.log(primerElemento);

// el elemento padre elimina al hijo

const nav = document.querySelector('.navegacion');
nav.removeChild(nav.children[2]);
console.log(nav.children);