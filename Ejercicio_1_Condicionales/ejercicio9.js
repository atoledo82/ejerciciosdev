console.log("-----------------------------------------------------------");
console.log("Bienvenido a tu puesto de tortas");
console.log("Torta de Queso $45 - Torta de Jamon 50");

let torta = prompt("Que torta quieres jamon o queso").toLowerCase();

let precio = 0.0;

if(torta == "queso"){
    precio = 45;
    let aguacate = prompt("La quieres con aguacate por $8 extras s/n").toLowerCase();
    if(aguacate == "s"){
        precio += 8;
    }

    let panajo = prompt("La quieres con Pan de Ajo $18 extras s/n").toLowerCase();
    if(panajo == "s"){
        precio += 18;
    }

}else if(torta == "jamon"){
    precio = 50;
    let quesoExtra = prompt("La quieres con Queso EXtra por $28 extras s/n").toLowerCase();
    if(quesoExtra == "s"){
        precio += 28;
    }
}else{
    console.log("Perdon tu opcion no esta en el menu");
}




console.log("Precio final de la Torta = " + precio);