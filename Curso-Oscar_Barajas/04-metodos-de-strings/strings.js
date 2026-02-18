// Metodos principales en Strings

// Length: Devuelve la longitud de una cadena de texto.

const texto = "Hola mundo";
console.log(texto.length); //10 

// Slice(inicio, fin): Extrae una sección de una cadena y devuelve una nueva cadena.

const texto1 = "JavaScript es genial";
console.log(texto1.slice(0, 10)); //JavaScript
console.log(texto1.slice(11)); //es genial
console.log(texto1.slice(-6)); //genial

// Substring(inicio, fin): Similar a slice pero no acepta índices negativos.

const texto2 = "Hola Mundo";
console.log(texto2.substring(0, 4)); //Hola

// Split(separador): Divide una cadena en un array de subcadenas utilizando un separador.

const texto3= 'linea1 linea2 linea3';
const lineas = texto3.split(' ');
console.log(lineas); //['linea1', 'linea2', 'linea3']

