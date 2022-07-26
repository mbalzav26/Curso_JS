// valores por defecto en funciones

/* Son valores que nos permiten ingresar
valores predeterminados  */

// los podemos dejar como string vacio o colacar un valor predeterminado
function saludo(nombre = 'desconocido', apellido = ''){
    console.log(`hola ${nombre} ${apellido}`);
}

const n1 = prompt("Ingrese su nombre");
const n2 = prompt("Ingrese su apellido");

saludo(n1, n2);
