// Arrays es una estructura de datos que almacena varios valores en una sola variable

const notas = ['Nota 1', 'Nota 2', 'Nota 3'];
const numeros = [1,2,3,4,5,6];
const mixtos = [1, 'texto', null, true, {id: 1}]

// Agregar, eliminar, listar, etc.

// CRUD = create, read, update, delete. Estos pueden aplicarse con arrays.

// Crear (create)

// push() sirve para crear un elemento y colocarlo al final

notas.push('Nota 4'); // push no manipula el valor o el tipo de dato, este manipula los valores contenidos.
console.log(notas);

// unshift() se usa para crear un elemento y colocarlo al inicio

notas.unshift('Nota 0')
console.log(notas)

// splice() Agregar un valor en una posición

notas.splice(1,0, 'Notas 1.2')
console.log(notas)

// Leer (Read)

console.log(notas[0]);
console.log(notas[1]);
console.log(notas.length);

// Actualizar (Update)

const notas2 = ['Nota 1', 'Nota 2']
notas2[1] = 'Nota 3'

console.log(notas2)

notas2.splice(1,0, 'Nota 4')
console.log(notas2)

// Eliminar (Delete)

const notas3 = ['Nota 1', 'Nota 2']
console.log(notas3.pop()) // elimina el ultimo elemento
console.log(notas3) 

const notas4 = ['Nota 1', 'Nota 2']
/* console.log(notas4.shift()) // elimina el primer elemento
console.log(notas4) */
console.log(notas4.splice(1,1))
console.log(notas4)
