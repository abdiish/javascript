

var arr = [5,4,3,2,1];

console.log(arr);

console.log( arr[0], arr[5]);

arr.reverse();

console.log(arr);


arr = arr.map( function(elem){
    elem *= elem;
    return elem;
});

console.log(arr);

arr = arr.map( Math.sqrt );

console.log(arr);

//Une todos los elementos de un array formando una cadena
// y los separa con aquel argumento que definamos.
console.log("Uso de Join ");
arr = arr.join("|");
console.log(arr);

//Se usa para dividir una cadena en una matriz de subcadenas
// y devuelve la nueva matriz 
// separator -  Opcional. Especifica el cararter o expresion regular
// que se utilizara para la división de la cadena
// limit - OPCIONAL, un entero que especifica el número de divisiones...
console.info("Uso de Split.");
arr = arr.split("|");
console.log(arr);

console.info("Uso de Push.");
arr.push("6");
console.log(arr);

console.info("Uso de Unshift.");
arr.unshift("0");
console.log(arr);

console.log(arr.toString());

console.info("Uso de Pop");
var elimine = arr.pop();
console.log(arr, elimine);

console.info("Uso de Splice");
arr.splice(1, 3, "10", "20", "30");
console.log(arr);

console.info("Uso de Slice");
arr = arr.slice(0,3);
console.log(arr);


var array = [ 
    true, 
    {
        nombre: "Fernando",
        apellido: "Herrera"
    }, 
    function(){
        console.log("Estoy viviendo en un arreglo");
    },
    function(persona){
        console.log(persona.nombre+" "+persona.apellido);
    },
    [
        "Fernando", 
        "Carlos", 
        "Hernando", 
        "Melissa",
        [
            "Juan",
            "Pedro",
            "Dilcia"
        ]
    ]
];

console.log(array);
console.log(array[0]);
console.log(array[1].nombre +" "+ array[1].apellido);

array[2]();
array[3](array[1]);

console.log( array[4][4][1] );

var array2 = array[4][4];
array2[1] = "Pedra";
console.log(array2);

console.log(array);
