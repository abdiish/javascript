

var i = 1;

while( i <= 10 ) {

   
    i++;

    if(i === 5){
        continue;
    }

    console.log( i );
}


do{

    i++;

    if(i === 5){
        continue;
    }

    console.log(i);
    break;

}while( i<10 );