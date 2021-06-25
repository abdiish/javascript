

var persona = {

    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,

    direccion: {
       pais: "Costa Rica",
       ciudad: "San Jose",
       
       edificio: {
           nombre: "Edifio principal",
           telefono: "2222 4567"
       }     
    }
};

//Obtener valores de un objeto a través de notación punto(.)
console.info(persona.nombre);

console.log(persona.direccion.pais);
console.log(persona.direccion.ciudad);

//Se agrega propiedad nueva a objeto persona
//Ejemplo: Codigo Postal
persona.direccion.zipcode = 11101;
console.log(persona.direccion.zipcode);


console.log(persona.direccion.edificio.telefono);


//Resumir, usando valores por referencia

var edificio = persona.direccion.edificio;

//Agregar nueva propiedad aledificio
edificio.nopiso = "8vo piso";

console.log(persona);

/**
 * NOTACIÓN DE CORCHETE
 * Para traer datos de manera dinamica
 */

var campo = "edad";

console.log( persona[campo] );


