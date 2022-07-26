// Parametros y Argumentos en Funciones

function sumar(a,b){ // estos son los parametros de funcion
    console.log(a + b);
}

sumar(22,33); // estos son los argumentos de funcion los valores reales que se le pasan a la funcion

function saludo(nombre, apellido){
    console.log(`hola ${nombre} ${apellido}`);
}

const n1 = prompt("Ingrese su nombre");
const n2 = prompt("Ingrese su apellido");

saludo(n1, n2);

