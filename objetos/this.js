/**
 * THIS en JavaScript
 * 
 * La palabra clave 'this' se refiere al objeto que está ejecutando el código actual.
 * Su valor depende del contexto en el que se utilice:
 * 
 * - En el contexto global: se refiere al objeto global (window en navegadores, global en Node.js)
 * 
 * - En un método de objeto: se refiere al objeto propietario del método
 * 
 * - En una función: se refiere al objeto global (en modo no estricto) o undefined (en modo estricto)
 * 
 * - En una función flecha: hereda 'this' del contexto léxico (donde fue definida)
 * 
 * - En un constructor: se refiere a la nueva instancia creada
 * 
 * @description Demuestra el comportamiento y uso de 'this' en diferentes contextos
 */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona("Cristian", 25);
console.log(persona1);

persona1.nuevoMetodo = function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
}

persona1.nuevoMetodo(); // Llama al método que utiliza 'this' para acceder a las propiedades del objeto persona1