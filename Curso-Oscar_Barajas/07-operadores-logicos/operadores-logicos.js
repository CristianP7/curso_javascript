// Operadores Lógicos 

// AND (&&), OR (||), NOT (!)

// Operador AND (&&) devuelve true si *ambos* operandos son *verdaderos*, de lo contrario devuelve false. Es útil para combinar múltiples condiciones que deben cumplirse simultáneamente.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Operador OR (||) devuelve true si *al menos uno* de los operandos es *verdadero*, de lo contrario devuelve false. Es útil para combinar condiciones donde solo una necesita ser verdadera.

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Operador NOT (!) devuelve el valor booleano opuesto del operando. Si el operando es true, devuelve false; si es false, devuelve true. Es útil para invertir el resultado de una condición.

console.log(!true); // false
console.log(!false); // true
