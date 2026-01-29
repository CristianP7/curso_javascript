// Explicit Type Casting

const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal) 
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting

const sum = '5' + 3 // el signo de + nos sirve para concatenar strings
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean) //concatenó el true =  3true

const sumWithNumber = 2 + true
console.log(sumWithNumber) // 3 <= fue el resultado 

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log('========STRING========')
console.log(stringValue + stringValue) //concatena automaticamente cuando hay un string
console.log(stringValue + numberValue)//concatena automaticamente cuando hay un string
console.log(stringValue + booleanValue)//concatena automaticamente cuando hay un string
console.log('=======NUMBER==========')
console.log(numberValue + stringValue)//concatena automaticamente cuando hay un string
console.log(numberValue + numberValue) //suma
console.log(numberValue + booleanValue)//suma
console.log('========BOOLEAN========')
console.log(booleanValue + stringValue)//concatena automaticamente cuando hay un string
console.log(booleanValue + numberValue)//suma
console.log(booleanValue + booleanValue)//suma
