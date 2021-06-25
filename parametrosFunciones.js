/**
 *   
 */

function imprimir( nombre, apellido ) {

    apellido = apellido || "xxx";

    /* if( apellido === undefined){
        apellido = "xxx";
    }
 */
    console.log( nombre+" "+apellido );
}

//"Juan", es una función anónima
imprimir( "Juan", "Padilla" );


/**
 * MANDAR UN OBJETO ANONIMO POR PARAMETRO
 */

function imprimrir2( persona ) {

    console.log( persona.nombre+" "+persona.apellido );
}

//Se crea un objeto anonimo
imprimrir2({

    nombre: "Juan",
    apellido: "Padilla"

});

/**
 * MANDAR UN OBJETO POR PARAMETRO
 */
function imprimir3( persona ){
    console.log( persona.nombre+" "+persona.apellido );
}

var obj = {

    nombre: "Jorge",
    apellido: "Lopez"
};

imprimir3( obj );

/**
 *  MANDAR FUNCION ANÓNIMA POR PARAMETRO
 */

 function imprimir4( fn ) {

    fn(); 
 }

 imprimir4( function(){

    console.log("Funcion anónima");

 });

 /**
  *     MANDAR FUNCION EXPLICITA
  */

 function imprimir5( fn ) {
    fn();
 }

 var miFuncion = function() {

    console.log("Funcion...");

 }

 imprimir5(miFuncion);    