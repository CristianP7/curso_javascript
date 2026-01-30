// Adivina el número secreto

const numeroSecreto = Math.floor(Math.random() * 3 + 1)
const numeroJugador = parseInt (prompt('Adivina el número secreto entre el 1 y el 10'))

alert(`Este es el número con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
  console.log("Felicidades, adivinaste el número secreto!");
} else if (numeroJugador < numeroSecreto) {
  console.log("El número es demasiado bajo, intenta de nuevo");
} else {
  console.log("El número es muy alto, intenta de nuevo");
}
