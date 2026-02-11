// filter () Crea un nuevo array con elementos que cumplen una condición dada por una función
const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0) // % --> modulo

console.log(numbers)
console.log(evenNumbers)

// reduce() reduce un array a un solo valor

//accumulator es como decir let accumulator = 0

const numbersReduce = [1,2,3,4,5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce, '<====')
console.log(sum)

// caso 2  . reduce()

const words = ["apple", "banana", "hello", "bye", "banana", "bye"]
const wordsFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordsFrecuency , '<=====')
