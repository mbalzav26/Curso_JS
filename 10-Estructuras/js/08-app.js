// detener un condicional con una funcion

/* a diferencia del switch que se para su ejecucion con un break
hay forma de parar la ejecucion usando una funcion */

let puntaje = 499;

function revisarPuntaje(){
    if (puntaje >= 500){
        console.log('excelente');
        return;
    }
    if(puntaje >= 300){
        console.log('muy bien');
        return;
    }
    if (puntaje < 300){
        console.log('puedes mejorar');
        return; // el return hace la funcion del break
    }

}

revisarPuntaje();