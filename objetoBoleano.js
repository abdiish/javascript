

var a = new Boolean();
var b = false;

console.log(a);

/**
 *  Objeto String
 */

var b = "Herrera";

var a  = new String("Juan Carlos");
console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("n");
console.log("La letra en la posición: ",i);

i = a.lastIndexOf("n");
console.log("La letra esta en la posición: ", i);

var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);

/**
 *  
 */

document.write("Hola mundo");


/**
 *  Objeto fecha
 * 
 */

var hoy = new Date();
var fechaMiliSegundos = new Date(0);
var fechaFija = new Date(2021, 06, 27, 15, 26, 15);

console.log(hoy);
console.log(fechaMiliSegundos);
console.log(fechaFija);

console.log(hoy.getFullYear());


/***
 * Operaciones con fechas
 */

var fecha = new Date(2016, 9, 20);

/* console.log(fecha);

fecha.setDate(25)//Sumar dias
console.log(fecha);

 */

//Prototipo para suamr dias, años
Date.prototype.sumarDias = function(dias){
    this.setDate(this.getDate()+dias);
    return this;
}

Date.prototype.sumarAnios = function(anios){
    this.setFullYear(this.getFullYear()+anios);
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(-5));
console.log(fecha.sumarAnios(1));
