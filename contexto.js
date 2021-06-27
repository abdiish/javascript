/**
 *  funciones y su contexto
 */


function crearFunciones() {

    //Crear arreglo
    var arr = [];
    var numero = 1;

    for(var numero = 1; numero <=3; numero ++){

        //Crear función dentro del arreglo
        //Imprime numero que esta dentro de su contexto
    arr.push(
        (function(numero){

            return function(){

                console.log(numero);
            
            }
        
        })(numero)//
    );

    }

    return arr;
}

var funciones = crearFunciones();

//Invocar función
funciones[0]();
funciones[1]();
funciones[2]();