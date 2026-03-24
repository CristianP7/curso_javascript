const opiniones = [
  {
    id: "op-1",
    nombre: "María",
    raiting: 5,
    comentario: "Llegó rápido y la calidad es excelente",
    fecha: "2025-01-10",
  },
  {
    id: "op-2",
    nombre: "Cristian",
    raiting: 4,
    comentario: "Buen producto. El empaque podría mejorar",
    fecha: "2025-01-22",
  },
  {
    id: "op-3",
    nombre: "Carla",
    raiting: 1,
    comentario: "Muy malo, no me gustó",
    fecha: "2025-02-03",
  },
  {
    id: "op-4",
    nombre: "Fipo",
    raiting: 5,
    comentario: "Muy...",
    fecha: "2025-02-02",
  },
];

function createOpinionElement(opinion) {
  const article = document.createElement("article");
  article.classList.add("opinion");
  article.dataset.id = opinion.id;

// createElement("article") → crea el HTML
// classList.add("opinion") → le agrega clase CSS
// dataset.id = opinion.id → guarda el id como atributo:

// Se vería así en HTML => <article class="opinion" data-id="op-1"></article>

  const header = document.createElement("header");
  const meta = document.createElement("div");
  meta.classList.add("meta");

  const nombre = document.createElement("strong");
  nombre.textContent = opinion.nombre;

  const rating = document.createElement("span");
  rating.textContent = `⭐ ${opinion.raiting}/5`;

  meta.appendChild(nombre);
  meta.appendChild(rating);

  const fecha = document.createElement("small");
  fecha.classList.add("muted");
  fecha.textContent = opinion.fecha;

  header.appendChild(meta);
  header.appendChild(fecha);

  const comentario = document.createElement("p");
  comentario.textContent = opinion.comentario;

  article.appendChild(header);
  article.appendChild(comentario);

  return article;
}

function renderOpinions(list) {
  const contenedor = document.querySelector("#opiniones");
  contenedor.replaceChildren();

  list.forEach((opinion) => {
    const el = createOpinionElement(opinion);
    contenedor.appendChild(el);
  });
}

renderOpinions(opiniones);
