
// Prototipos y Herencia en JavaScript

// En JavaScript, los objetos pueden heredar propiedades y métodos de otros objetos a través de prototipos. Cada objeto tiene un enlace interno a otro objeto llamado su prototipo. Cuando intentas acceder a una propiedad o método de un objeto, JavaScript primero busca esa propiedad o método en el propio objeto. Si no lo encuentra, busca en el prototipo del objeto, y así sucesivamente hasta llegar al final de la cadena de prototipos.

// Ejemplo de prototipos y herencia:

// Definimos un constructor para crear objetos de tipo Persona

class Animal {
    constructor (nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido")
    }
}
//  extends extiende la clase de aninal a la nueva creada de perro para usar sus atributos

/* 

super() es una función especial en JavaScript que se utiliza en clases que heredan de otras clases.
Llama al constructor de la clase padre (Animal) para inicializar las propiedades heredadas.
Debe llamarse antes de usar "this" en el constructor de la clase derivada.
En este caso, super(nombre, tipo) inicializa los atributos nombre y tipo de la clase Animal.
  
*/

class Perro extends Animal{
    constructor (nombre, tipo, raza){
        super(nombre, tipo)
        this.raza = raza
    }
    emitirSonido() {
        console.log("El perro ladra")
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro("Balto", "Perro", "Alaskan Malamute")
console.log (perro1)

perro1.correr()
perro1.emitirSonido() // llama este metodo ya que sobreescribimos el método ya que extendimos la clase


// Se está agregando a la instancia, no a la clase Perro
perro1.nuevoMetodo = function () {
    console.log("Este es un metodo")
}

// La forma de hacerlo es inyectar al prototipo que se genera en la clase de perro con
Perro.prototype.segundoMetodo = function(){
    console.log("Es otro metodo nuevo")
}

console.log(Perro.prototype.segundoMetodo())