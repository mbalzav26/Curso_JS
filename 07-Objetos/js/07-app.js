// Problemas con los objeto en JAVASCRIPT

const objeto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true
}

/* Las constantes no pueden ser modificadas, 
pero al ser un objeto si podemos modificar o eliminar sus propiedades */

objeto.nombre = "Monitor de 20 pulgadas";
delete objeto.disponible;

console.log(objeto);