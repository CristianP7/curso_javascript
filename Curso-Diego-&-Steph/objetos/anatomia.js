/*
    Estructura de dato

    key / value

    objeto {
        propiedad: valor,
        propiedad: valor,
        propiedad: valor

        metodos()
    }

*/

const persona = {
    nombre: 'Cristian',
    edad: 25,
    direccion: {
        calle: 'Serrano 266',
        ciudad: 'Santiago'
    },
    saludar () {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    },
}

console.log(persona)
persona.saludar()

// para agregar
persona.telefono = "555-555-5555"

console.log(persona.telefono)

persona.despedir = () => {
    console.log('Adios')
}

persona.despedir()


//borrar propiedades y metodos

delete persona.telefono

delete persona.despedir
