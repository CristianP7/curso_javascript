// Es una función que recuerda el scope en el que fue creada, incluso después de que ese scope haya terminado de ejecutarse. Esto significa que una función puede acceder a variables y parámetros de su scope padre, incluso después de que la función padre haya terminado de ejecutarse.

function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial;

    return {
        depositar(cantidad) {
            saldo += cantidad; 
            return `Depositado $${cantidad}, Saldo actual $${saldo}`
        },

        retirar(cantidad) {
            if (cantidad > saldo) {
                return 'Fondos Insuficientes';
            }
            saldo -= cantidad;
            return `Retirado $${cantidad}. Saldo actual: $${saldo}`
        },

        consultarSaldo() {
            return `Saldo $${saldo}.`
        }

    }
}

const miCuenta = crearCuentaBancaria(1000);

console.log(miCuenta.consultarSaldo()) // $1000
console.log(miCuenta.depositar(500)) // Depositado $500, Saldo actual $1500
console.log(miCuenta.retirar(1232)) // Retirado $1232. Saldo actual: $268
console.log(miCuenta.consultarSaldo()) // Saldo $268.