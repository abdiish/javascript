
//Una función de primera clase
function Jugador( nombre ) {

    this.nombre = nombre; //setea nombre
    this.pv = 100;
    this.sp = 100;
    
    this.curar = function( jugadorObjetivo ){

        if(this.sp >= 40) {

            this.sp -= 40;
            jugadorObjetivo.pv += 20;

        }else{
            console.log(this.nombre + " No tiene sp");
        }

        this.estado( jugadorObjetivo );
 
    }

    this.estado = function( jugadorObjetivo ) {

        console.info( this );
        console.info(jugadorObjetivo);
    }

}

//Se declaran dos jugadores 
var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log( gandalf );
console.log( legolas );

gandalf.curar( legolas );

   
