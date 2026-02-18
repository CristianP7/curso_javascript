// slice ()  Crea una copia superficial (shallow copy) de una porción del array, especificada por ínidces de inicio y fin

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(2)) // 1 parametro lo toma como indice (DESDE) del array que queremos tomar
console.log(animals.slice(2, 4)) // 2 parametro lo toma como DESDE, y HASTA **PERO SIN INCLUIR EL FIN***
console.log(animals.slice(-2)) // cuando es negativo, cuenta desde atras hacia adelante, Dame desde el segundo elemento contando desde el final, hasta el final = -1, ultimo elemento |-2 ultimos dos elementos | -3 ultimos tres elementos
console.log(animals.slice(-2, -1)) //lo mismo que el caso 2, el final no lo cuenta
console.log(animals.slice(), "<=======") // devuelve el array original