/**
 *  Repeticiones de strings - Repeat
 */

let texto = "Lapiz";

//  Construye o devuelve una nueva cadena que contiene el numero especificado
//  de copias de la cadena en la cual fue llamada

console.log(texto.repeat(20));
console.log('esto es un string '.repeat(10));

const ESPACIOS = 10;

let nombres = ["Fernando","Melisa","Juan"];
let telefonos = ["123", "356", "789"];

for(i in nombres) {

    let dif = ESPACIOS - nombres[i].length;
    console.log(nombres[i] +" ".repeat(dif) +"|"+ telefonos[i]);
}

