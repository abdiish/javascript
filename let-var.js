/**
 *  Uso de let y var, ambito global
 *  SCOPE(ambito de una variable)
 */

let mensaje = "Hola desde ambito global";

if(true){

    let mensaje = "Hola desde el ambito de una función";

    console.log(mensaje);

}

console.log(mensaje);