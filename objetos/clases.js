/**
 * Clase Persona - Molde para crear objetos de tipo persona
 * 
 * Las clases en JavaScript permiten crear un molde reutilizable para generar múltiples objetos
 * con las mismas propiedades y métodos, haciendo el código más escalable.
 * 
 * Conceptos clave:
 * - Constructor: Método especial que se ejecuta al crear una instancia. Utiliza 'this' para
 *   referenciar el objeto que se está creando.
 * - Instancia: Objeto creado a partir de una clase usando la palabra reservada 'new'.
 *   Cada instancia es un objeto independiente con sus propias propiedades.
 * - Métodos: Funciones definidas dentro de la clase que pueden ser utilizadas por todas
 *   las instancias.
 * 
 * @class Persona
 * @param {string} nombre - El nombre de la persona
 * @param {number} edad - La edad de la persona en años
 * 
 * @method saludar() - Imprime en consola un saludo con el nombre y edad de la persona
 * 
 * @example
 * const persona1 = new Persona('Juan', 30);
 * persona1.saludar(); // Output: "Hola, me llamo Juan y tengo 30 años"
 */
// es generar un molde sobre el cual se van a generar diferentes objetos

// PARA HACERLO ESCALABLE HAY QUE UTILIZAR LA FUNCIÓN CONSTRUCTORA

// this hace referencia al objeto que se va a crear, es decir, a la instancia de la clase

// la función constructora inicia con Mayuscula

// seguido a eso, hay que crear una instancia

// una instancia es un objeto que se crea a partir de una clase, es decir, es un objeto que se crea a partir de un molde


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

// para crear una instancia de la clase, se utiliza la palabra reservada new como variable

const persona1 = new Persona('Juan', 30);

console.log(persona1);

