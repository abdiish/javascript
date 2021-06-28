


/* setTimeout(function(){
    console.log("Paso un segundo");
},1000);
 */

var segundos = 0;

var intervalo = setInterval(() => {
    segundos++;
    console.log("SEG", segundos);
    if(segundos === 3){
        clearInterval(intervalo);
    }
}, 1000);