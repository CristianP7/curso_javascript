// Coerción Implicita

console.log('5' + 2); // 52 | Concatenación, el número se convierte en cadena. El simbolo + es para concatenar si uno de los operandos es una cadena.    

console.log('5' - 2); // 3 | Resta, el string se convierte en número. El simbolo - es para restar, por lo que el string se convierte en número.

console.log(true + 1); // 2 | El booleano se convierte en número, true es 1 y false es 0. El simbolo + es para sumar, por lo que el booleano se convierte en número.

// Coerción Explicita

const str = '42'; 
const num = Number(str); // Convertir string a número explícitamente
console.log(typeof str, str); // '42'
console.log(typeof num, num); // 42

const int = parseInt(str, 10); // Convertir string a entero explícitamente
console.log(int) // 42

/*
diferencia entre parseInt() y Number():


| Entrada  | parseInt() | Number() |
| -------- | ---------- | -------- |
| `"10"`   | 10         | 10       |
| `"10.9"` | 10         | 10.9     |
| `"15px"` | 15         | NaN      |
| `"px15"` | NaN        | NaN      |



*/
 const a = 10.9;
 console.log(Math.round(a)); // 11 | Redondea al número entero más cercano. Si el decimal es .5 o mayor, redondea hacia arriba; si es menor, redondea hacia abajo.

const float = parseFloat('3.14159'); // Convertir string a número de punto flotante explícitamente
console.log(typeof float, float); // number 3.14159

const texto = String(123); // Convertir número a string explícitamente
console.log(typeof texto, texto); // '123'  

const bool = Boolean(1); // Convertir número a booleano explícitamente
console.log(typeof bool, bool); // booleano se convierte a número, true es 1 y false es 0.