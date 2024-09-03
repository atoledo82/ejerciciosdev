let arreglo =[];
let numero = parseInt(prompt("Introduce un Número"));

while (numero != 0){
    numero = parseInt(prompt("Introduce un Número"));
    if (!isNaN(numero)) {
        arreglo.push(numero);
    }
    
}
console.log(arreglo);
