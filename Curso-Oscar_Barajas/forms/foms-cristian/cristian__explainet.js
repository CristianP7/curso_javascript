// 1. La "etiqueta" para nuestra bodega
const LLAVE = 'mi_formulario';

// 2. Función para MOSTRAR lo guardado
function mostrarMensaje() {
    const caja = document.querySelector('#mensaje-guardado');
    
    // Sacamos el texto de la bodega y lo convertimos en objeto de nuevo
    const texto = localStorage.getItem(LLAVE);
    const datos = JSON.parse(texto);

    // Si hay datos, los ponemos en el HTML
    if (datos) {
        caja.innerHTML = `
            <p>Último nombre: ${datos.nombre}</p>
            <p>Mensaje: ${datos.mensaje}</p>
        `;
    }
}

// 3. Función para GUARDAR cuando enviamos
function guardarDatos(event) {
    event.preventDefault(); // Detenemos el envío automático

    // Capturamos los valores directamente por su ID (más fácil)
    const nombreInput = document.querySelector('#nombre').value;
    const mensajeInput = document.querySelector('#mensaje').value;

    // Creamos un objeto simple
    const ficha = {
        nombre: nombreInput,
        mensaje: mensajeInput
    };

    // Convertimos el objeto a texto y lo guardamos
    localStorage.setItem(LLAVE, JSON.stringify(ficha));

    mostrarMensaje(); // Actualizamos la pantalla
}

// 4. Conectamos el botón de enviar con nuestra función
const miForm = document.querySelector('#contact-form');
miForm.addEventListener('submit', guardarDatos);