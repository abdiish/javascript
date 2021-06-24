
/**
 *  Las variables primitivas se pasan por VALOR
 *    
 */

var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

/**
 *   Cuando son objetos, siempre se pasan valores por referencia
 *   --c o d apuntan al mismo lugar de memoria, por ello al ser 
 *   -- modificado el valor de c o d, ambas cambian.
 */

var c = {

    nombre: "Juana"
}

var d = c;

console.log("c: ", c);
console.log("d: ", d);

//Notación de punto(.) para acceder a la propiedad
c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Pedro"

console.log("c: ", c);
console.log("d: ", d);

