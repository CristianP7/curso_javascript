// Tipo de dato: string

let string1 = 'Hola, mundo'
let string2 = "JavaScript"

//Tipos de concatenación
let string3 = `${string1}, con estas comillas se puede concatenar strings`
let string4 = string1 + ' ' + string2

// console.log(string1)
// console.log(string2)
// console.log(string3)
// console.log(string4)

let frase = 'Ayer estuve Caminando Por la Playa'

console.log(frase.length) //Muestra la cantidad de caracteres de la variable incluyendo los espacios
console.log(frase.toLocaleLowerCase()) // Transforma texto a minusculas

console.log(frase.toLocaleUpperCase()) // Transforma texto a mayusculas

console.log(frase.substring(0,4)) // devuelve una porción de un string. Toma dos parámetros, el índice inicial desde donde empezar y la longitud de la subcadena que queremos.