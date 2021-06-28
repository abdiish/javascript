


//var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Hola mundo, 12345.";

var arr = texto.match( /[0-9]/ );

console.log(arr);


/**
 * 
 *  CALL, APPLY, BIND
 */

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function() {
        var salida = this.marca +" "+ this.color;
        return salida;
    }
}

console.log(carro.imprimir());


var logCarro = function(arg1, arg2){
    console.log("Carro: ", this.imprimir());
    console.log(arg1, arg2);
}

var logModeloCarro = logCarro.bind(carro);
logModeloCarro("asx","sdssaa");


logModeloCarro.call(carro, "123", "456");

logModeloCarro.apply(carro, ["123", "456"]);

//Funciones prestadas


