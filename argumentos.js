
var arguments = 10;


function miFuncion() {

    console.log( arguments );
}

miFuncion(10);

//Sobre carga de operadores, js no cuenta con dicha función.
//Se hace algo similar


function crearProducto(nombre, precio) {

    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precio: ", precio);
}

function crearProducto100( nombre ){

    crearProducto(nombre,100);
}


function crearProductoCamisa( precio ){
    crearProducto("Camisa",precio);
}

crearProducto("Lapiz");
crearProducto100("Corrector");
crearProductoCamisa(75);