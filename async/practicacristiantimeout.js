const promise =  new Promise ((resolve, reject) => {
    setTimeout(() => {
        let operationSucces = true;
        if (!operationSucces) {
            resolve('La operación fue exitosa')
        } else {
            reject ('Hubo un error')
        }
    }, 2000);
})

promise
    .then((succesMessage) => {
        console.log(succesMessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })