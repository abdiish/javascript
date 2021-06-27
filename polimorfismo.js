
/***
 *  DETERMINAR TIPO DE DATO O TIPO DE OBJETO
 */
function determinaDatos( a ) {

    if( a === undefined ){
        console.log("A es undefined... no se puede hacer operaciones");
    }

    if( typeof a === "number"){
        console.log("A es un numero y puedo hacer operaciones con numeros");
    }

    if(typeof a === "string") {
        console.log("A es un texto, puedo hacer operaciones contextos");
    }

    if(typeof a === "object") {
        console.log("A es un objeto.. pero puede ser cualquier cosa");

        if(a instanceof Number) {
            console.log("A es un objeto numerico");
        }
    }

}

var b = new Number(3);

console.log(b);

determinaDatos(b);
/* determinaDatos({
    nombre: "Fernando"
}); */