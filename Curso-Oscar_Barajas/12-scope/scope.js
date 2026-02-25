// Scope es el alcance donde una variable existe y puede usarse

// Tenemos 3 tipos de alcance en JS
// Alcance, función y bloque

// Global = Cualquiera puede acceder a global

const global = 'Soy Global';

function ejemplo() {
    const funcion = 'Soy de función';

    if (true) {
        const bloque = 'Soy de Bloque'
        console.log(bloque)
    }
    console.log(funcion)
}

console.log(global)


