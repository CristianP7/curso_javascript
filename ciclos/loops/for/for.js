// ¿Cómo utilizar un bucle "for" en JavaScript?

// El "for" es una de las estructuras más fundamentales y poderosas en JavaScript para realizar iteraciones o loops, permitiendo recorrer elementos dentro de una lista o array. Tal vez te preguntes, ¿cómo funciona y por qué es tan valioso? Aquí te lo explicaré de manera sencilla y práctica.

// ¿Qué es el método "for" y cómo estructurarlo?

// El método "for" en JavaScript es una herramienta que nos permite repetir la ejecución de un bloque de código hasta que una condición especificada sea falsa. Consta de tres pasos principales dentro de sus paréntesis:

// Inicialización: Se define una variable de control (comúnmente 'i'), asignando un valor inicial. Por ejemplo, let i = 0.

// Condición: Evalúa la condición que debe cumplirse para que el loop continúe. Normalmente, se compara la variable de control con una longitud. Un ejemplo es i < lista.length.

// Incremento: Modifica la variable de control en cada iteración, generalmente incrementándola en uno (i++)

//      for (variable; condicion; incremento) {
//          código a ejecutar
//      }

let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}