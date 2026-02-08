/*

CLOSURE: Función que tiene acceso a bariables de un ambiente externo, incluso después de que la función externa haya terminado de ejecutarse.

Ámbito léxico: cada vez que se declara una funciom, crea su propio ámbito léxico. El ámbito léxico es el entorno en el que se declara una función, y determina a qué variables tiene acceso la función.

 */

function outerFunction () {
    let outerVariable = 'I am from the outer function';

    function innterFunction() {
        console.log(outerVariable)
    }

    return innterFunction
}

const closureExample = outerFunction()
closureExample()

function createCounter() {
    let count = 0

        return function() {
            count++
            console.log(count)
        }
}

const counterA = createCounter()
counterA()
counterA()
counterA()

const counterB = createCounter()
counterB()
counterB()

function ouder () {
    let message = "Hello, "

    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const clousureA = ouder()
const clousureB = ouder()

clousureA("Cristian")
clousureA("Gato Felix")
