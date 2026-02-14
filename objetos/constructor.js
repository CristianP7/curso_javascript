// PARA HACERLO ESCALABLE HAY QUE UTILIZAR LA FUNCIÓN CONSTRUCTORA

// la función constructora inicia con Mayuscula
function Persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// seguido a eso, hay que crear una instancia

const persona1 = new Persona ('Juan', 'Perez', 30);

console.log(persona1);

const persona2 = new Persona ("Diego", "De Granda", 35);

console.log(persona2);

// para añadir una propiedad

Persona.prototype.telefono = '555-555-5555'; // se agrega al propitipo de la funcion
// para añadir propiedad solo a persona 1
persona1.nacionalidad = 'Mexicana';

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar();
persona2.saludar();