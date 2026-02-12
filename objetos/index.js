// PROGRAMACIÓN ORIENTADA A OBEJTOS

/* objeto: es una esctructura de datos que ayuda a guardar valores

key / value

objeto{
    propiedad: valor,
    porpiedad: valor,
    propiedad: valor
}

Metodos: son funciones que están dentro de los objetos

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
    }
}
