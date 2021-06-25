
/**
 * LAS FUNCIONES SON OBJETOS
 */

function a() {

    console.log("Funcion a");
}

a();

//A la función a asignarle la propiedad nombre
a.nombre = "Maria";
a.direccion = {
    pais: "Costa Rica",
    ciudad: "San Jose",
    edificio: {
        piso: "8vo",
        nombre: "Edificio principal"
    }
}