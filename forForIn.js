

for( var i = 0; i <= 10; i++) {

    if(i == 5){
        continue;
    }
    console.log(i);
}


var Persona = function(){

    this.nombre = "Juan",
    this.apellido = "Pineda",
    this.edad = 18;
};


var juan = new Persona();

Persona.prototype.direccion = "San Jose";

for( prop in juan ){

    console.log(prop, ":",juan[prop]);
}


for(var i = 1; i <= 5; i++){

    console.log(i);
}