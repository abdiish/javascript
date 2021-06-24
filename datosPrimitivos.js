
/**
 *  TIPOS DE DATOS PRIMITIVOS 
 * 
 */

var num = 10;
var str = "text";
var bol = true;
var und = undefined;
var nul = null;

//Escritura dinamica, las variables no estan amarradas a un valor 
num = str;

/**
 *  OBJETOS
 *  Puede tener variables primitivos u otros objetos
 *  Se basa en nomenclatura de pares
 */

// Creando un objeto vacío
var miObjeto = {};

console.info(miObjeto);

var obj = {

    numero: 10,
    texto: "Cualquier texto",

    objHijo: {
        //Puede tener propiedades u objetos
        numero2: 200,
        texto2: "Nuevo texto 2"
    }
};

console.info(obj);