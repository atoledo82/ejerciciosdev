let medio = prompt("Que vehículo conduces? (Coche = c)|(Moto = m)|(Autobus = a)").toLowerCase();
let kilometros = prompt("Cuántos KM recorriste");
let precioxkm =0.00;
let cargoxkm =0.00;
let totalPagar = 0.00;

if (medio == 'c'){
    precioxkm =0.20;
    if(kilometros < 100){
        cargoxkm = 5;
    }else{
        cargoxkm = 10
    }
    totalPagar = (precioxkm * kilometros)+cargoxkm;
    alert("Total a Pagar es de " + totalPagar);
}else if (medio == 'm'){
    precioxkm =0.10;
    if(kilometros < 100){
        cargoxkm = 5;
    }else{
        cargoxkm = 10
    }
    totalPagar = (precioxkm * kilometros)+cargoxkm;
    alert("Total a Pagar es de " + totalPagar);
}else if (medio == 'a'){
    precioxkm =0.5;
    if(kilometros < 100){
        cargoxkm = 5;
    }else{
        cargoxkm = 10
    }
    totalPagar = (precioxkm * kilometros)+cargoxkm;
    alert("Total a Pagar es de " + totalPagar);
}