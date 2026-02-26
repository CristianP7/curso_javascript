// Los objetos los podemos entender como la caracterización de algo, es decir, un objeto es una entidad que tiene propiedades y métodos. Las propiedades son características o atributos del objeto, mientras que los métodos son acciones o comportamientos que el objeto puede realizar.

// Los cuales los vamos a definir como clave y valor

const nota = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
}

// Para acceder a las propiedades

console.log(nota.id);
console.log(nota.title);

const campo = 'content';
console.log(nota[campo])

console.log(nota.author?.name) // ? = Opcional Chaining

