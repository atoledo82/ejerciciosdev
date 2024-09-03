let numero1 = parseInt(prompt("Introduce primer Número entre 1 y 50"));
let numero2 = parseInt(prompt("Introduce segundo Número entre 1 y 50"));
let contador = 0;

while(contador <= 50){
   let mensaje = ""
   
    if(contador == numero1 || contador == numero2 ){
       mensaje = " LOTERIA!";
    }
    console.log(contador + mensaje);
    contador ++;


}