
function obtenerAleatorio() {
    
    return Math.random();

}

console.log(obtenerAleatorio() + 10);


function obtenerNombre(nombre) {

    return "Juan";

}

var nombre = obtenerNombre();
console.log(nombre +" Padilla");
//console.log(obtenerNombre() + " Padilla")

/**
 *  DEVUELVE TRUE O FALSE
 */
function esMayor05() {

    if(obtenerAleatorio > 0.5){
        return true;
    }else{
        return false;
    }
}

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}

/**
 *  FUNCIONES U OBJETOS ANONIMOS  
 */

function crearPersona(nombre, apellido){

    //Retorna objeto anónimo 
    return {

        nombre: nombre,
        apellido: apellido
    }

}

var persona = crearPersona("Maria", "Paz");
console.log(persona.nombre);
console.log(persona.apellido);


/***
 *  
 */

function creaFuncion(){

    return function( nombre ){

        console.log("Me creó: "+nombre);

        return function() {

            console.log("Segunda función");
        }
    }
}

var nuevaFuncion = creaFuncion();

nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();