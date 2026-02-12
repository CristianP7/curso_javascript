// Copying an array
// El operador spread (...) se puede usar para copiar un array de manera superficial. Esto significa que se crea un nuevo array con los mismos elementos, pero si los elementos son objetos, solo se copia la referencia a esos objetos.

const originalArray = [1,2,3,4,5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

// Combining Arrays

const array1 = [1,2,3]
const array2 = [4,5,6]
const combArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combArray,)