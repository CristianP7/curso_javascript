// La condición switch en JavaScript es una estructura de control que permite ejecutar diferentes bloques de código según el valor de una expresión.

//        switch(expresion) {
//            case valor1: 
//            // código a ejecutar
//            break;
//            case valor2:
//                // código a ejecutar
//            break;
//            default: 
//            // código si no hay validación en cada uno de los casos 
//        }

let expresion = prompt("Escriba el nombre de su producto")

switch (expresion) {
    case "Naranjas":
        console.log("Las naranjas cuestan $1.50 el kilo")
    break;

    case "Manzanas":
        console.log("Las manzanas cuestan $2.50 el kilo")
    break;
    
    case "Plátanos":
        console.log("El platano cuesta $1 el kilo")
    break;

    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $10 el kilo")
        break;
    default:
        console.log (`Lo siento, no contamos con ${expresion}`)
}

console.log("¿Hay algo más que desees?");

//switch es diferente a if ya que no usasmos expresiones de condicionador. Es un comparador estricto - Si el valor es estrictamente igual, se hace el caso