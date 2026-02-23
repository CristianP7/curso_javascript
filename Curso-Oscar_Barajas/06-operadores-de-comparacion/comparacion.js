// Operadores de comparación en JS: Igualdad y Desigualdad

// Igualdad Débil (==) y Desigualdad Débil (!=) realizan coerción de tipos antes de comparar, lo que puede llevar a resultados inesperados. Por ejemplo, '5' == 5 es true porque el string '5' se convierte en el número 5 antes de la comparación. Es recomendable usar la Igualdad Estricta (===) y Desigualdad Estricta (!==) para evitar problemas de coerción y asegurar comparaciones más predecibles.

// Igualdad Débil (==)
console.log(5 == '5'); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(null == undefined); // true | El operador de igualdad débil considera null y undefined iguales.

// Desigualdad Débil (!=)

console.log(5 != '5'); // false
console.log(true != 1); // false   

//Igualdad estricta (===)

console.log(5 === 5); // true
console.log(5 === '5'); // false 

// Desigualdad estricta (!==)

console.log(5 !== '5'); // true
console.log(5 !== 5); // false