// crea un nuevo array - map() es un método de los arrays que: recorre cada elemento aplica una función devuelve un nuevo array

const numbers = [1,2,3,4,5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)

// for each itera sobre cada elemento, sin crear un nuevo array

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

const farenheit = [82, 81, 83]
const celsius = farenheit.map(
  temp => Number(((5 / 9) * (temp - 32)).toFixed(0))
)

console.log(celsius)