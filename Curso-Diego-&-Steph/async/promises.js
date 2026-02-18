// LAS PROMESAS HACEN QUE NUESTRO CODIGO PASE DE SER SINCRONO A ASINCRONO, LO QUE SIGNIFICA QUE PODEMOS EJECUTAR CODIGO QUE TOMA TIEMPO (COMO UNA PETICION A UN SERVIDOR) SIN BLOQUEAR EL RESTO DE NUESTRO CODIGO.

// UNA PROMESA ES UN OBJETO QUE REPRESENTA LA TERMINACION O EL FRACASO DE UNA OPERACION ASINCRONA Y SU RESULTADO.

// PARA CREAR UNA PROMESA, USAMOS EL CONSTRUCTOR PROMISE, QUE TOMA UNA FUNCION COMO ARGUMENTO. ESTA FUNCION RECIBE DOS PARAMETROS: RESOLVE Y REJECT. RESOLVE SE LLAMA CUANDO LA OPERACION ASINCRONA SE COMPLETA CON EXITO, MIENTRAS QUE REJECT SE LLAMA CUANDO HAY UN ERROR.

// ESTADOS: PENDING, FULLFILLED, REJECTED
// CALLBACKS: RESOLVE, REJECT

// then() es un metodo que se ejecuta cuando la promesa se resuelve
// catch() cuando la promesa no se resuelve, en el catch vamos a obtener el error para ver lo que está pasando.

// EJEMPLO

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccesful = true;
    if (operationSuccesful) {
      resolve("La operación fue exitosa");
    } else {
      reject("Falló la operación");
    }
  }, 2000);
});

promise
    .then((succesMessage) => {
        console.log(succesMessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })
