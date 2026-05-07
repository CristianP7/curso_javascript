// Fetch es la API moderna de JavaScript para hacer solicitudes HTTP. Recibe una URL (endpoint) y retorna una promesa. Permite trabajar con datos remotos en cualquier sitio: servidores en Estados Unidos, Brasil, México o Colombia. Con esto, una web puede obtener información, autenticar y persistir datos.

// Solicitudes HTTP

// Fetch GET

const FAKEAPI = 'https://api.escuelajs.co/api/v1/products';

fetch(FAKEAPI)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error', error));


// Fetch POST/PUT/DELETE

const FAKEAPI = 'https://api.escuelajs.co/api/v1/products';

fetch (FAKEAPI, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
        title: 'Producto de prueba Cristian Pereira',
        price: 999,
        description: 'Creado desde fetch',
        categoryId: 1,
        images: ['https://placeimg.com/640/480/any'],
    }),
});