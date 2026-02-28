// Los objetos los podemos entender como la caracterización de algo, es decir, un objeto es una entidad que tiene propiedades y métodos. Las propiedades son características o atributos del objeto, mientras que los métodos son acciones o comportamientos que el objeto puede realizar.

// Los cuales los vamos a definir como clave y valor

const nota = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
}

// Para acceder a las propiedades.

console.log(nota.id);
console.log(nota.title);

const campo = 'content';
console.log(nota[campo])

console.log(nota.author?.name) // ? = Opcional Chaining

// Destructuración

const nota2 = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
}

const id = nota2.id;
const title = nota2.title;
console.log(id, title)

const {title: titulo, content} = nota2; // Destructuración de objetos, title: titulo = renombrar la variable title a titulo
console.log(titulo, content)

// Destructurar elementos es muy común a la hora de ver codigo, ya que nos permite acceder a las propiedades de un objeto de una manera más sencilla y legible. Además, también podemos usar la destructuración para asignar valores a variables de una manera más rápida y eficiente.


// Spread operator.

const nota3 = {id: 2, title: 'Hola'};
const data = { esAdmin:true};

const copia = { ...nota3}; 

console.log(nota3)
console.log(copia)

const notaActualizada = {
    ...nota3,
    ...data,
    edad:18
}

console.log(notaActualizada)

// Iterar sobre objetos - Object.keys

console.log(Object.keys(nota));

// Object.values

console.log(Object.values(nota)); 

// Object.entries

console.log(Object.entries(nota));