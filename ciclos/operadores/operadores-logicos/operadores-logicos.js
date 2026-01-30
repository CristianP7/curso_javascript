// Operadores Lógicos
 
// Operador lógico AND (&&): Este operador lógico compara dos expresiones. Se debe de tener ambas expresiones verdaderas para que el resultado sea verdadero, pero si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.

// Operador lógico OR (||): Este devuelve como true si cualquiera de las dos expresiones son verdaderas y false cuando ambas expresiones son falsas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.

// Operador lógico NOT (!): El operador lógico NOT no realiza ninguna comparación como lo hacen los operadores AND y OR.

const a = 10;
const b = 20;
const c = '10'

a == b && a === c // false ya que 10 no es igual a 20 y que '10' no es igual ya no es el mismo tipo de valor

a != b || a === c // true ya que se cumple una condición (a != b)

!(a === c) //true ya que a no es igual a c y la ! negacion se convierte el false en un true