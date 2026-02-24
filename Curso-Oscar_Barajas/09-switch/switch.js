// Switch permite elegir entre varias opciones dependiendo del valor de una expresión

// Es una alternativa a usar múltiples if-else

// La estructura básica de un switch es la siguiente:

/*
switch (expresión) {
    case valor1:
        // código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        // código a ejecutar si la expresión es igual a valor2
        break;
    default:
        // código a ejecutar si la expresión no coincide con ningún valor
}

*/

// Sintaxis:

const dia = 'miercoles';

switch (dia){
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
     console.log('Día laboral');
     break;
     case 'sabado':
     case 'domingo':
      console.log('Fin de Semana');
      break
      default:
        console.log('Día no valido');
} 

// Switch se usa más que todo para casos donde se tiene una variable que puede tomar varios valores específicos y se quiere ejecutar un bloque de código diferente para cada valor. Es importante recordar usar el break para evitar que el código siga ejecutándose después de encontrar una coincidencia.

// En este ejemplo, dependiendo del valor de la variable 'dia', se imprimirá si es un día laboral, fin de semana o un día no válido.

// Esto, en el ambito de programación, para el trabajo día a día, es muy útil para manejar diferentes casos de manera clara y organizada.
