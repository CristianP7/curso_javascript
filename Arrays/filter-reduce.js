// filter () Crea un nuevo array con elementos que cumplen una condición dada por una función
const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0) // % --> modulo

console.log(numbers)
console.log(evenNumbers)