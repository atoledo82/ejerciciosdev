let numero1 = prompt("Ingresa el primer número");
let numero2 = prompt("Ingresa el segundo número ")
let numero3 = prompt("Ingresa el tercer número ")

let mayor = Math.max(numero1,numero2,numero3);

let alertaIguales ="";

if(numero1 === numero2 || numero1 === numero3 || numero2 === numero3){
    alertaIguales = " ...Pero al menos dos de ellos son iguales";
}

alert("De los dos números ingresados " + mayor + " Es el Mayor" + alertaIguales);
