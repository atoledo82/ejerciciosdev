
// Ejercicio 8

let calificacion = prompt("Dame tu calificación porfavor");

if (calificacion >=1 && calificacion <=10){
    if(calificacion <= 6){
        console.log("Calificación Reprobado");
    }else if( calificacion >6 && calificacion <=8){
        console.log("Calificación Regular");
    }else if( calificacion == 9){
        console.log("Calificación Buena");
    }else if( calificacion == 10){
        console.log("Calificación Excelente");
    }

}else{
    console.log("Tu calificacion es incorrecta fuera de rango");
}