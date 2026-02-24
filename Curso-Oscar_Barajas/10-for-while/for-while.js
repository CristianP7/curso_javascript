// For / While

// for (inicialización; condición; incremento) {
//     // código a ejecutar
// }

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