
//Especificar de que tipo sera ese objeto

function Persona(nombre, apellido) {

    //propiedades
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;

    //metodo
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }

}

var juan = new Persona("Juan", "Mendoza");

console.log( juan );

console.log( juan.nombre );

console.log( juan.nombreCompleto() );