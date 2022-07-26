// Ventajas de las funciones flecha

const saludo = function(nombre) {
    console.log(`Hola Mundo ${nombre}`);
}

// si solo es un parametro se puede omitir los parentesis
const saludo3 = nombre => `Hola Mundo ${nombre}`;

// Si son dos o mas parametros se deben de poner los parentesis
const saludo2 = (nombre, apellido) => `Hola Mundo ${nombre} ${apellido}`;

saludo("mateo");
console.log(saludo2("mateo", "gonzalez"));
console.log(saludo3("mateo"));

// SI LA FUNCION SOLO TIENE UNA LINEA DE CODIGO NO ES NECESARIO PONER LOS PARENTESIS
// EL RETURN SE DA POR IMPLICITO