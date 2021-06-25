/**
 *  LOS OBJETOS TIENEN: PROPIEDADES Y MÉTODOS
 *  -NOTACION DE PARES-
 */

var persona = {

    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function() {

        console.log(this.nombre+" "+this.apellido);
    },
    direccion:{
        pais: "Costa Rica",
        obtenerPais: function(){
            
            //Una función anidada no tiene acceso al this externo, es 
            //por ello que se usa _this o self
            var _this = this;

            var nuevaDireccion = function(){
                
                console.log("La direcciónm es en " +_this.pais);
                //console.log(this);
            }

            nuevaDireccion();
        }
    }
};

//Es util cuando se cambian valores desde afuera del objeto
persona.nombre = "Andres";

persona.imprimirNombre();

persona.direccion.obtenerPais();
