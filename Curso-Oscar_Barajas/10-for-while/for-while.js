// For / While

// for (inicialización; condición; incremento) {
//     // código a ejecutar
// }

// For - se usa cuando sabemos cuántas veces queremos ejecutar un bloque de código, o cuando queremos iterar sobre un array o una colección de datos

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const notas = ['Nota 1', 'Nota 2', 'Nota 3'];

for (let i = 0; i < notas.length; i++){ // se usa let ya que el valor de i cambia en cada iteración
    console.log(`Indice ${i}: ${notas[i]}`);
}

// For of - permite iterar sobre valores de un iterable (como un array o una cadena de texto) sin necesidad de usar un índice

const frutas = ['Manzana', 'Pera', 'Uva'];

for (const fruta of frutas){ // se usa const ya que el valor de fruta no cambia en cada iteración, aunque si cambia el valor que se le asigna
    console.log(fruta);
    if (fruta === 'Manzana') {
        console.log('Es una rica Manzana');
    }
}

// For in - itera sobre propiedades e indices

const persona = {nombre: 'Ana', edad: 25, ciudad: 'Madrid'}

for (const key in persona) {
    console.log(`${key}: ${persona[key]}`)
}

// Las principales diferencias entre for of y for in son:

// - for of itera sobre los valores de un iterable, mientras que for in itera sobre las propiedades de un objeto o los índices de un array.

// - for of no se puede usar para iterar sobre objetos, mientras que for in sí se puede usar para iterar sobre objetos y arrays.

// - for of es más adecuado para iterar sobre arrays y otros iterables, mientras que for in es más adecuado para iterar sobre objetos y sus propiedades.

// ==============================================================================  //

// While - ejecuta un bloque de código mientras una condición sea verdadera

// Este se usa cada vez que no sabemos cuántas veces se va a ejecutar el bloque de código, o cuando queremos que el bloque de código se ejecute mientras una condición sea verdadera

let contador = 0; 

while (contador < 3) {
    console.log(contador);
    contador++; // es importante incrementar el contador para evitar un bucle infinito
}

// Do While - similar al while, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la ejecución del bloque

let numero =  0;

do {
    console.log(`Entra en ${numero}`);
    numero++;
} while (numero < 3); {
    console.log(numero);
}