let arreglo =[];
let numero = prompt("Introduce letra o palabra para terminar deja en blanco");
arreglo.push(numero);

while (numero != ""){
    numero = prompt("Introduce letra o palabra para terminar deja en blanco");
    arreglo.push(numero);
    
    
}
arreglo.pop();
console.log(arreglo);

let mensaje ="";
for(i=0;i < arreglo.length;i++){
    mensaje = arreglo[i] + " " + mensaje;
}
console.log(mensaje);
