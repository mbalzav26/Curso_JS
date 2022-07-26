// estructura de control con else if

/* el else solo se ejecuta si alguna 
de las condciones previa no se cumplen
este toma la primera condicion que se cumpla */

let dinero = 100;
let total = 200;
let tarjeta = false;
let cheque = false;

if(dinero > total){
    console.log("Puedes pagar ...");
}else if(cheque){
    console.log("Puedes pagar con cheque ...");
}else if(tarjeta){
    console.log("Puedes pagar con tarjeta ...");
}else{
    console.log("No puedes pagar ...");
}