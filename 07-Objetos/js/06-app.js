// asignar variables a un objeto dentro de otro objeto

// Usamos el destructuring para asignar variables a un objeto dentro de otro objeto
const objeto = {
    nombre: "Monitor",
    precio: 100,
    disponible: true,
    info: {
        medidas: {
            alto: "30",
            ancho: "40",
        },
        fabricacion: {
            pais: "China",
        }
    }
}
/* En este caso en destructuring es algo mas complejo
porque tenemos que especificar el objecto que vamos a acceder
para usamos la siguite sintaxis info: {fabricacion} */

const {info: {medidas}}= objeto;
console.log(medidas);
console.log("-----------------------------------");

/* hay que tener en cuenta que si accedesmo a una propiedad
de este objeto hay que especificarla son la siguiente sintaxis */

const {info: {medidas: {alto, ancho}}}= objeto;
console.log(alto);
console.log(ancho);