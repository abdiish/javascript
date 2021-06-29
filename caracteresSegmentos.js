/**
 *  Segmentos de caracteres
 */

var saludo = "Hola mundo";
var frutas = ['mango', 'pera', 'platano', 'durazno'];
//  Devuelve true o false
//  Determina si una cadena comienza con los caracteres de una cadena 
//  especificada.
//  Sintaxis - startsWith(searchString, position)
console.log(saludo.startsWith("Holas"));

//  Determina si una cadena de texto termina con los caracteres de una cadena
console.log(saludo.endsWith("Mundo"));

//  Determina si una matriz incluye un determinado elemento
//  Devuelve true o false 
//  Sintaxis - arr.includes(searchElement[, fromIndex]);
console.log(frutas.includes('mango'));

var nuevoElemento = frutas.push('fresa');
console.log(frutas);
