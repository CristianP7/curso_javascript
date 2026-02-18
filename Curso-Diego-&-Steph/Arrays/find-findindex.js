// FIND () Devuelve el primer elemento que cumpla con una condición de una función proporcionada

const multipleOf5 = [5,10,15,20]
const fisrtNumberGreaterThan10 = multipleOf5.find(number => number = 10)
console.log(multipleOf5)
console.log(fisrtNumberGreaterThan10)

// finIndex() Devuelve el indice del primer elemento array que cumpla la condicion


                    //0  1   2   3   4 (Posiciones)
const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 50)
console.log(randomNumber, "<---- ")
console.log(indexNumber) // retorna 3 por la posición en la que se encuentra