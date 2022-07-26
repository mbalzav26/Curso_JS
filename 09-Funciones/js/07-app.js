// Como se Comunican las funciones

/* se hacen llamados de forma encadenada siempre tomando como 
referencia la funcion pricipal */

iniciarApp();

function iniciarApp (){
    console.log('Iniciando app');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Segunda funcion');
    auth('mateo');
}

function auth(nombre){
    console.log('autenticando...');
    console.log(`${nombre} bienvenido al sistema`);
    salir();
}

function salir(){
    console.log('saliendo .....');
}

