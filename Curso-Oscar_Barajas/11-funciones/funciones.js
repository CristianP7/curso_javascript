// Nos permiten reutilizar bloques de código, lo que hace que nuestro programa sea más eficiente y fácil de mantener.

function saludar(nombre) {
    return `Hola ${nombre}`;
}

const mensaje = saludar('Cristian');
const mensaje2 = saludar('Juanin')
console.log(`${mensaje}, ${mensaje2}`);

// Parámetros: son las variables definidas en la función
function crearUsuario(nombre, edad) {
    // ...
    return {nombre, edad};
}

// Con esto pasamos los argumentos que van a estar en los parametros de la función
const usuario = crearUsuario('Ana', 25);
console.log(usuario);

// Arrow Functions

const multiplicar = (a, b) => a * b;
console.log(multiplicar(2,5))

// Bloque directamente con arrow funtcion

const crearNota = (contenido, titulo = 'Sin Titulo') => {
    return {
        titulo,
        contenido,
        creado: Date.now()
    }
}

const nota1 = crearNota('Mi contenido')
const nota2 = crearNota('Harry Potter y la piedra filosofal', 'Nota de Cristian')
console.log(nota1, nota2)


// Si una función no tiene return, esta va a mandar undefined