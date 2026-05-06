const CONTACT_STORAGE_KEY = 'form';

function renderSavedMessages (){
    const box = document.querySelector('#mensaje-guardado');
    //obtener información
    const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
    const data = JSON.parse(raw);

    box.innerHTML = `<p>Ultimo mensaje guardado</p>
    <p>Nombre: ${data.nombre}</p>
    <p>Mensaje: ${data.mensaje}</p>`;
}

function handleContactSubmit (event){
    event.preventDefault(); //evita mandar parametros que se introduzcan en el formulario a la URL

    const form = event.target;
    const formData = new FormData(form);

    const nombre = String(formData.get('nombre'));
    const mensaje = String(formData.get('mensaje'));

    const payload = {
        nombre,
        mensaje,
        date: new Date().toISOString(),
    }

    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(payload))

    form.reset();
    renderSavedMessages();
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}


