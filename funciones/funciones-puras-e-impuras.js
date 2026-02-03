// Funciones Puras

// Side Effects => hacen que las funciones puras, dejen de ser puras

// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o en consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Funciones Puras

function sum (a, b) {  //es una función pura ya que siempre vamos a recibir los mismos parámetros
    return a + b
}


// Funciones Impuras

function sum (a, b) {
    console.log('A: ', a)
    return a + b
}

function sumWithSideEffect (a){
    total += a
    return total
}

// Función pura

function square (x) {
    return x * x
}

// Función pura

function addTen (y) {
    return y + 10
}

// Función pura

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)