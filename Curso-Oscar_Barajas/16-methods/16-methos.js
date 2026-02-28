// Métodos de orden superior

// Map() Transforma cada elemento contenido en los arreglos y nos entregará uno nuevo con la transformación que le estemos haciendo

const notas = [
    {id: 1, title: 'Nota 1', content: 'Contindo uno'},
    {id: 2, title: 'Nota 2', content: 'Contindo dos'},
    {id: 3, title: 'Nota 3', content: 'Contindo tres'},
];

const contenidos = notas.map((nota) => nota.content);
console.log(contenidos);

const notasConFecha = notas.map((nota) => ({
    ...nota,
    fechaCreacion: Date.now(),
    esAdmin: true
}))

console.log(notasConFecha)