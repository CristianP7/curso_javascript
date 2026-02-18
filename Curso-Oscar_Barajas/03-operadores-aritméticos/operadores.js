// Operadores Aritméticos son símbolos que se utilizan para realizar operaciones matemáticas básicas en JavaScript. Estos operadores permiten realizar cálculos con números y variables. A continuación, se presentan los operadores aritméticos más comunes:

// Suma (+)

const suma = 5 + 3; //8
console.log(suma);

// Resta (-)

const resta = 5 - 3; //2
console.log(resta);

// Multiplicación (*)

const multiplicacion = 5 * 3; //15
console.log(multiplicacion);

// División (/)

const division = 6 / 3; //2
console.log(division);

// Módulo (%) //Es el residuo de una división - ejemplo si dividimos 5 entre 2, el resultado es 2 con un residuo de 1, por lo tanto el módulo es 1

const modulo = 5 % 2; //1
console.log(modulo);

// Exponenciacion (**)

const exponenciacion = 2 ** 3; //8
console.log(exponenciacion);

// Operadores de Asignación son una forma abreviada de realizar operaciones aritméticas y asignar el resultado a una variable.

// Asignación con Suma (+=)
let a = 5;
a += 3; // a = a + 3
console.log(a); //8

// Asignación con Resta (-=)
let b = 10;
b -= 4; // b = b - 4
console.log(b); //6

// Asignación con Multiplicación (*=)
let c = 6;
c *= 2; // c = c * 2
console.log(c); //12

// Asignación con División (/=)
let d = 15; 
d /= 3; // d = d / 3
console.log(d); //5

// Operadores de Incremento y Decremento. Son utilizados para aumentar o disminuir el valor de una variable en 1.

let contador = 100;

contador++; // contador = contador + 1 (Incremento)
console.log(contador); //101

contador--; // contador = contador - 1 (Decremento)
console.log(contador); //100

console.log(1 / 0); //Infinity es un valor especial que representa el infinito positivo en JavaScript.

console.log(-1 / 0); //-Infinity es un valor especial que representa el infinito negativo en JavaScript.

// NaN (Not a Number) es un valor especial que representa un resultado que no es un número válido. Por ejemplo, si intentamos dividir una cadena de texto entre un número, el resultado será NaN.

console.log(0/0); //NaN
console.log("texto" * 2); //NaN