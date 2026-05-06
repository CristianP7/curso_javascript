// Async

console.log('1. Inicio');

setTimeout(() => {
    console.log('2. Timeout Ejecutado')
}, 3000);

console.log('3. Fin');

// Callbacks es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una tarea asincrónica. Es una forma común de manejar operaciones asincrónicas en JavaScript, como solicitudes de red, temporizadores o eventos.

function obtenerDatos(callback) {
    setTimeout(() => {
        callback('Datos obtenidos');
    },2000);
}