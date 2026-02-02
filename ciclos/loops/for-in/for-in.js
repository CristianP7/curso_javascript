// FOR IN se utiliza para iterar SOBRE OBJETOS innumerables NO ITERABLES. 
// Los objetos son esctructuras de datos que constan propiedades y valor
// propiedades = valor

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

