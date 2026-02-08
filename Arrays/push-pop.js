//push añade uno o mas elementos al final de un array (mutabilidad)

const countries = ['Venezuela', 'USA', 'Canada']
const newCountries = countries.push('Alemania', 'Colombia')

console.log(countries)
console.log(newCountries) // devuelve la nueva longitud del array

// pop elimina el ultimo elemento del array y devueve el valor

const removedCountry = countries.pop()
console.log(countries)
console.log(removedCountry) 