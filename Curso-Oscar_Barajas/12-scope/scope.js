// Scope es el alcance donde una variable existe y puede usarse

// Tenemos 3 tipos de alcance en JS
// Alcance, función y bloque

// Global = Cualquiera puede acceder a global

const global = 'Soy Global';

function ejemplo() {
    const funcion = 'Soy de función';

    if (true) {
        const bloque = 'Soy de Bloque';
    console.log(`Bloque - Función: ${funcion}`);
    console.log(`Bloque -Bloque: ${bloque}`);
    console.log(`Bloque - Global: ${global}`); 
    }
    console.log(`Función: ${funcion}`);
    // console.log(`Bloque: ${bloque}`); //No llega hasta acá porque bloque es de bloque y no de función y da error porque no existe
    console.log(`Global: ${global}`); 
}

    console.log(ejemplo());
    console.log(`Global - Función: ${funcion}`);
    console.log(`Global - Bloque: ${bloque}`);
    console.log(`Global - Global: ${global}`); 


