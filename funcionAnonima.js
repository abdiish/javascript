/**
 * FUNCIONES ANONIMAS
 * 
 */

//a = 10; Variable en el objeto global 

(function(){

    var a = 10;

    console.log( a );

    function cambiarA() {
        a = 20;
    }

    cambiarA();

    console.log( a );
})();


function ejecutarFuncion( fn ) {

    if( fn() === 1 ) {
        return true;
    }else{
        return false;
    }
}

console.log( ejecutarFuncion( function(){

    console.log("Funcion anónima ejecutada");
    return 1;
}) 

);
