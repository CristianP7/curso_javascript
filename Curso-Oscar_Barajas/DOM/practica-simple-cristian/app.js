const planes = [
    { id: 1, tipo: "básico", precio: 5},
    { id: 2, tipo: "pro", precio: 50},
    { id: 3, tipo: "premiun", precio: 500},
];

function crearPlanes(plan) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = plan.id;

    const tipo = document.createElement("h2");
    tipo.textContent = plan.tipo;

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = "$" + plan.precio;

    card.appendChild(tipo);
    card.appendChild(price);

    const boton = document.createElement("button")
    boton.classList.add("btn")
    boton.textContent = "Seleccionar" 
    card.appendChild(boton)

    return card;
}

function renderizarPlanes(list){
    const contenedor = document.querySelector(".container");

    list.forEach((plan) => {
        const el = crearPlanes(plan);
        contenedor.appendChild(el);
    });
}

renderizarPlanes(planes)