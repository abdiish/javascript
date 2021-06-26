/**
 *  Hacer más eficiente el uso de los objetos
 */

function Persona(){

    this.nombre   = "Fernando";
    this.apellido = "Herrera";
    this.edad     = 30;
    this.pais     = "Costa Rica";

    /* this.imprimirInfo = function() {
        console.info(this.nombre +" "+ this.apellido + "("+this.edad+")");
    } */
}

Persona.prototype.imprimirInfo = function() {
    console.log(this.nombre +" "+ this.apellido +"("+this.edad+")");
}

var fer  = new Persona();

console.log(fer);
console.log(fer.imprimirInfo());
