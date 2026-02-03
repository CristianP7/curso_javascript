//1. Pasar funciones como argumentos -> callback 

function a () {}
function b (a) {}

b(a)

//2. Retornar funciones -> declaración de función

function a () {
    function b () {}
    return b
    
}

// Asignar Funciones a Variables -> expresión de función

const a = function () {}

// Tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -> Nested Functions

function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()

// método, se pueden almacenar funciones en objetos

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('🔥')
    }
}

rocket.launchMessage()