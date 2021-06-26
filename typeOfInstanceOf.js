
/**
 * Se pueden enviar objetos, funciones, tipos primitivos
 * 
 */

function identifica( param ) {

    //console.log( typeof param );

    /* if( typeof param === "function") {
        param();
    }else{
        console.log(param);
    } */

    //instanceof permite comparar dos objetos 
    console.log( param instanceof Persona );
}

function Persona() {
    this.nombre = "Fernando";
    this.edad = 30
}

var juan = new Persona();

identifica("juan");