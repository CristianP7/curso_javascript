// => la flecha indica el return y luego se coloca el llamado a la función

// TRADICIONAL FUNCTION

const greeting = function (name) {
 return `Hola, ${name}`
}

// ARROW FUNCTION - explicit return

const newGreeting = (name) => {
 return `Hola, ${name}`
}

// Arrow function - implicit return

const newGreetingImplicit = name => `Hola, ${name}`
// cuanto tengamos más de un parametro es necesario colocar los parentesis
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hola, ${name} ${lastName}`

// Lexical Binding

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsability')

fictionalCharacter.messageWithArrowFunction('Hola Mundo')