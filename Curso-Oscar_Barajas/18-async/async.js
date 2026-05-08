// Async

console.log('1. Inicio');

setTimeout(() => {
    console.log('2. Timeout Ejecutado')
}, 3000);

console.log('3. Fin');

// Callback es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una tarea asincrónica. Es una forma común de manejar operaciones asincrónicas en JavaScript, como solicitudes de red, temporizadores o eventos.

function obtenerDatos(callback) {
    setTimeout(() => {
        callback('Datos obtenidos');
    },2000);
}

obtenerDatos((resultado) => {
    console.log(resultado);
})

// Callback Hell permiten anidar múltiples callbacks, lo que puede hacer que el código sea difícil de leer y mantener. Esto ocurre cuando se tienen varias operaciones asincrónicas que dependen unas de otras, lo que resulta en una estructura de código anidada y compleja.


function obtenerUsuario(cb) {
  setTimeout(() => cb({ id: 1, nombre: 'Ada' }), 300);
}

function obtenerNotas(userId, cb) {
  setTimeout(() => cb(['nota 1', 'nota 2']), 300);
}

function procesarNotas(notas, cb) {
  setTimeout(() => cb(notas.map((n) => n.toUpperCase())), 300);
}

obtenerUsuario((usuario) => {
  obtenerNotas(usuario.id, (notas) => {
    procesarNotas(notas, (resultado) => {
      console.log('Usuario:', usuario.nombre);
      console.log('Resultado:', resultado);
    });
  });
});

// Promise representa un valor que puede estar disponible ahora, en el futuro o nunca. Tendrá estados como pendiente (pending), cumplida (fulfilled) o rechazada (rejected). Las promesas permiten manejar operaciones asincrónicas de manera más legible y estructurada, evitando el callback hell.

const promesa = new Promise((resolve, reject) => {
    const exito = true; // Simulamos una operación exitosa

    setTimeout(() => {
        if (exito) {
            resolve('Operación exitosa');
        } else {
            reject(new Error ('Algo salió mal'));
        }
    }, 1000);
}); 

promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
})

