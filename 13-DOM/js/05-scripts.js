// QuerySelector all

/* retorna todos los elementos que cumplan la condicion*/

const card = document.querySelectorAll('.card');
console.log(card);

const form = document.querySelectorAll('#formulario');
console.log(form);

// si no exite te retorna un array vacio
const noExiste = document.querySelectorAll('#noExiste');
console.log(noExiste);