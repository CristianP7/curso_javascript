// Tipos de datos Primitivos

const texto = 'Hola'; // sirve para almacenar cadenas de texto

const numero = 42; // sirve para almacenar números enteros o decimales

const booleano = true; // sirve para almacenar valores de verdad (true o false)

const nulo = null; // sirve para representar la ausencia de un valor o un valor nulo. Es un valor asignable que indica que una variable no tiene ningún valor. Es importante destacar que null es un tipo de dato primitivo en JavaScript, pero a menudo se confunde con undefined, que representa una variable que ha sido declarada pero no se le ha asignado ningún valor.

const indefinido = undefined; // sirve para representar una variable que ha sido declarada pero no se le ha asignado ningún valor. Es un valor primitivo que indica que una variable no tiene un valor definido. Es importante destacar que undefined es diferente de null, que representa la ausencia de un valor o un valor nulo. En JavaScript, si intentas acceder a una variable que no ha sido declarada, obtendrás un error de referencia, mientras que si accedes a una variable que ha sido declarada pero no se le ha asignado ningún valor, obtendrás el valor undefined.

const simbolo = Symbol('id'); // sirve para crear identificadores únicos. Es un tipo de dato primitivo que se utiliza para crear valores únicos e inmutables. Los símbolos son útiles para evitar colisiones de nombres en objetos y para crear propiedades privadas en objetos. Cada vez que se crea un símbolo, se garantiza que es único, incluso si se crean varios símbolos con la misma descripción. Los símbolos no pueden ser convertidos a cadenas de texto o números, lo que los hace ideales para su uso como claves de objetos o para representar conceptos únicos en el código.

const grande = 123n; // sirve para representar números enteros grandes que no pueden ser representados por el tipo de dato Number. Es un tipo de dato primitivo que se utiliza para representar números enteros grandes, como los que se encuentran en criptografía o en cálculos matemáticos complejos. Los números BigInt se representan con la letra "n" al final del número, lo que indica que es un valor BigInt. A diferencia de los números normales, los BigInt pueden tener una precisión arbitraria y no están limitados por el tamaño máximo de los números en JavaScript.

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof nulo); // El resultado de typeof null es "object", lo cual es un error histórico en JavaScript. Esto se debe a que en las primeras versiones de JavaScript, los valores null y undefined se representaban como objetos internos.
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof grande);


// Complejos 

const objeto = {nombre:'Juan', edad: 30}; // sirve para almacenar colecciones de datos relacionados. Es una estructura de datos que permite almacenar múltiples valores en una sola variable. Un objeto se compone de pares clave-valor, donde cada clave es un identificador único y cada valor puede ser de cualquier tipo de dato, incluyendo otros objetos. Los objetos son fundamentales en la programación orientada a objetos y se utilizan para representar entidades del mundo real, como personas, productos o eventos.

const arreglo = [1, 2, 3, 4, 5]; // sirve para almacenar una colección ordenada de elementos. Es una estructura de datos que permite almacenar múltiples valores en una sola variable. Un arreglo se compone de elementos indexados, donde cada elemento tiene un índice numérico que comienza en cero. Los arreglos pueden contener cualquier tipo de dato, incluyendo otros arreglos u objetos. Los arreglos son útiles para almacenar listas de datos relacionados y para realizar operaciones como iterar sobre los elementos o agregar nuevos elementos al final del arreglo.

const funcion = function() {} // sirve para almacenar un bloque de código que se puede ejecutar en cualquier momento. Es una estructura de datos que permite almacenar un bloque de código que se puede ejecutar en cualquier momento. Una función se define utilizando la palabra clave "function" seguida de un nombre opcional, una lista de parámetros entre paréntesis y un bloque de código entre llaves. Las funciones pueden ser llamadas para ejecutar el código que contienen, y pueden aceptar argumentos para personalizar su comportamiento. Las funciones son fundamentales en la programación y se utilizan para organizar el código, reutilizarlo y abstraer la lógica compleja en unidades más pequeñas y manejables.

