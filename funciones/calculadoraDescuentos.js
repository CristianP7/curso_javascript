// Esta función calcula el precio final de un producto
// aplicando un porcentaje de descuento
function calculateDiscountedPrice(price, discountPercentage) {

    // Calculamos cuánto dinero se va a descontar del precio original
    // Se multiplica el precio por el porcentaje y se divide entre 100
    // porque los porcentajes representan partes de 100
    const discount = (price * discountPercentage) / 100

    // Restamos el descuento al precio original
    // Esto nos da el precio final que el cliente debe pagar
    const priceWithDiscount = price - discount

    // Devolvemos el precio final para poder usarlo fuera de la función
    return priceWithDiscount
}

// Definimos el precio original del producto
const originalPrice = 100

// Definimos el porcentaje de descuento a aplicar
const discountPercentage = 20

// Llamamos a la función enviándole el precio y el descuento
// El valor retornado se guarda en la variable finalPrice
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

// Mostramos los resultados en la consola
// El operador + une texto con valores numéricos
console.log('Precio Original: $' + originalPrice)
console.log('Descuento: ' + discountPercentage + '%')
console.log('Precio con descuento: $' + finalPrice)
