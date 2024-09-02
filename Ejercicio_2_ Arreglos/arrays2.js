
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 10); // Genera un número aleatorio entre 0 y 1
    randomNumbers.push(randomNumber);
}
console.log(randomNumbers);


// Ejercicio 2
let palabras = prompt("Ingresa las palabras");
// una cadena de texto con el split crear un arreglo a oartir de un simbolo
let presentacion = palabras.split(",");
console.log(presentacion);

// Ejercicio 3
let numeros = [10,40,30,20,15,5];
// arreglo de mayor a menor

console.log(numeros.sort((a, b) => a - b));

let maxNumber = Math.max(numeros);
console.log(maxNumber);

