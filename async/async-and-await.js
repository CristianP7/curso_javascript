/**
 * Obtiene datos de personajes de la API de Rick and Morty.
 * 
 * Realiza una solicitud HTTP GET a la API de Rick and Morty para recuperar
 * la lista de personajes. La función utiliza la API fetch para hacer la petición.
 * 
 * @function fetchData
 * @returns {Promise} Promesa que se resuelve con la respuesta de la API
 * 
 * @description
 * fetch() es una función nativa de JavaScript que realiza solicitudes HTTP.
 * Devuelve una Promise que se resuelve cuando la respuesta llega del servidor.
 */
// 

// function fetchData() {
//     fetch("https://rickandmortyapi.com/api/character")
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error))
// }

// PARA HACER QUE LA FUNCION SE PASE A ASYNC

async function fetchData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json();
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

/*

Este código define una función async que hace una petición HTTP a la API de Rick and Morty. await fetch(...) espera la respuesta, await response.json() convierte el cuerpo a JSON, y luego imprime los datos en consola. Si ocurre un error en la petición o el parseo, se captura en catch y se muestra en consola.

*/