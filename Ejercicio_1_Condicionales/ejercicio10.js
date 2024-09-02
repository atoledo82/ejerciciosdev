
// Ejercicio 10

let course = 4999;
let carrera = 3999;
let master = 2999;


console.log("******************************************************");
console.log("Los precios mensuales de los programas son los siguientes");
console.log("Course:" + course);
console.log("Carrera:" + carrera);
console.log("Master:" + master);
console.log("******************************************************");

let curso = prompt("Que curso te interesa? (course (1)|carrera(2)|master(3)");

let beca = prompt("Tienes alguna beca? (Facebook = F)|(Google = G)|(Jesua = J)|(Ninguna = N").toLowerCase();
let descuento = 0.0;

if(beca == "n"){
    descuento = 0.0;
}else if(beca == "f"){
    descuento = 0.20;
}else if(beca == "g"){
    descuento = 0.15;
}else if(beca == "j"){
    descuento = 0.50;
}

let precioFinal = 0.0;

if (curso == 1){
    precioFinal = course - (course * descuento);
}else if (curso == 2){
    precioFinal = carrera - (carrera * descuento);
}else if (curso == 3){
    precioFinal = master - (master * descuento);
}
console.log("descuento: " + descuento + "%");
console.log("Precio Final: $" + precioFinal);
console.log("Pagarías por Mes: $" + Math.round(precioFinal/12));






