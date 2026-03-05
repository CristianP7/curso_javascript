// Metodos principales en Strings

// Length: Devuelve la longitud de una cadena de texto.

const texto = "Hola mundo";
console.log(texto.length); //10 

// Slice(inicio, fin): Extrae una sección de una cadena y devuelve una nueva cadena.

const texto1 = "JavaScript es genial";
console.log(texto1.substring(0, 10));
console.log(texto1.slice(0, 10)); //JavaScript
console.log(texto1.slice(11)); //es genial
console.log(texto1.slice(14,20)); //genial
console.log(texto1.length); //20

// Substring(inicio, fin): Similar a slice pero no acepta índices negativos.

const texto2 = "Hola Mundo";
console.log(texto2.substring(0, 4)); //Hola

// Split(separador): Divide una cadena en un array de subcadenas utilizando un separador.

const texto3= 'linea1, linea2, linea3';
const lineas = texto3.split(', ');
console.log(lineas); //['linea1', 'linea2', 'linea3']

// trim(), trimStart(), trimEnd(): Elimina espacios en blanco al inicio y/o al final de una cadena.

const texto4 = '   Hola Mundo   ';
console.log(texto4.trim()); //Hola Mundo
console.log(texto4.trimStart()); //Hola Mundo   
console.log(texto4.trimEnd()); //   Hola Mundo 

// toUpperCase() y toLowerCase(): Convierte una cadena a mayúsculas o minúsculas. (Util para normalizar texto en formulario o comparaciones)

const texto5 = 'Hola Mundo';
console.log(texto5.toUpperCase()); //HOLA MUNDO
console.log(texto5.toLowerCase()); //hola mundo

// includes(subcadena): Verifica si una cadena contiene una subcadena específica y devuelve true o false.

// mayusculas y minusculas importan, si quieres ignorar eso puedes usar toLowerCase() o toUpperCase() antes de comparar.

const contenido = 'Aprende JavaScript desde cero';
console.log(contenido.includes('Aprende')); //true
console.log(contenido.includes('Python')); //false

const content = 'Aprende JavaScript desde cero';
console.log(content.toLocaleLowerCase().includes('javascript'));

//startsWith(subcadena) y endsWith(subcadena): Verifican si una cadena comienza o termina con una subcadena específica.

const saludo = 'archivo.md';
console.log(saludo.startsWith('archivo')); //true
console.log(saludo.endsWith('.md')); //true

// replace() y replaceAll(): Reemplazan una subcadena por otra. replace() reemplaza solo la primera ocurrencia, mientras que replaceAll() reemplaza todas las ocurrencias.

const texto6 = 'Hola JavaScript, Hola Cristian';
console.log(texto6.replace('JavaScript', 'Carla')); //Hola Carla, Hola Cristian
console.log(texto6.replace('Cristian', 'C++')); //Hola JavaScript, Hola C++
console.log(texto6.replaceAll('Hola', 'Hi')); //Hi JavaScript, Hi Cristian
console.log(texto6); //Hola JavaScript, Hola Cristian (El texto original no se modifica, replace y replaceAll devuelven una nueva cadena)