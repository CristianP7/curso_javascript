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

//Promise


function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function obtenerUsuario() {
  return esperar(200).then(() => ({ id: 1, nombre: 'Ada' }));
}

function obtenerNotas(userId) {
  return esperar(200).then(() => ['nota 1', 'nota 2']);
}

function procesarNotas(notas) {
  return esperar(200).then(() => notas.map((n) => n.toUpperCase()));
}

obtenerUsuario()
  .then((usuario) => obtenerNotas(usuario.id))
  .then((notas) => procesarNotas(notas))
  .then((resultado) => console.log('Resultado:', resultado))
  .catch((error) => console.error('Error en algún paso:', error.message));

  // Async / await

  // Se usan palabras reservadas

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function obtenerUsuario() {
  await esperar(200);
  return { id: 1, nombre: 'Ada' };
}

async function obtenerNotas(userId) {
  await esperar(200);
  return ['nota 1', 'nota 2'];
}

async function procesarNotas(notas) {
  await esperar(200);
  return notas.map((n) => n.toUpperCase());
}

async function cargarDatos() {
  try {
    const usuario = await obtenerUsuario();
    const notas = await obtenerNotas(usuario.id);
    const resultado = await procesarNotas(notas);
    console.log('Usuario:', usuario.nombre);
    console.log('Resultado:', resultado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

cargarDatos();