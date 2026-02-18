// Un array permite almacenar múltiples valores dentro de una sola variable.
// Estos se crean de dos formas: 
// 1. new Array or Array ()

const fruits = Array("pera", "manzana", "naranja", "uva", "platano")
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1,2,3,4,5,6)
console.log(number)

// 2. Array literal syntax []

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

//Arrays Mixtos

const recipeIngredients = [
    "Flour",
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)

//Acceder a un array elements

const firstFruit = fruits[1] // Se cuenta desde el 0
console.log(firstFruit)

// length property => para saber el tamaño de un array

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability  (agregar)

fruits.push("watermelon")


//  Inmutability (agregar)

const newFruits = fruits.concat(["kiwi", "durazno"])
console.log(fruits)
console.log(newFruits)

// Checking arrays with Array.isArray()

let pera = "pera"

const isArray = Array.isArray(pera)
console.log(isArray) // false

// Practical exercise: summ all elements of an array.

const numbersArray = [1,2,3,4,5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)