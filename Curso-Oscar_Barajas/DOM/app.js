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
  // lo primero que hay que hacer, es crear el contenedor principal. En este caso Article.
  const article = document.createElement("article");
  article.classList.add("opinion"); // le agregamos la clase de opinion del css
  article.dataset.id = opinion.id; // le agregamos el id como atributo data-id al article

// createElement("article") → crea el HTML
// classList.add("opinion") → le agrega clase CSS
// dataset.id = opinion.id → guarda el id como atributo:

// Se vería así en HTML => <article class="opinion" data-id="op-1"></article>

  const header = document.createElement("header"); // creamos el header del article
  const meta = document.createElement("div"); // creamos un div para contener el nombre y el rating
  meta.classList.add("meta"); // le agregamos la clase meta para que se muestre en una sola línea y con espacio entre ambos elementos

  const nombre = document.createElement("strong");// creamos un strong para el nombre, para que se vea en negrita
  nombre.textContent = opinion.nombre; // sirve para asignar el texto al elemento, en este caso el nombre de la opinión

  const rating = document.createElement("span"); // creamos un span para el rating, para que se muestre al lado del nombre
  rating.textContent = `⭐ ${opinion.raiting}/5`; // asignamos el texto al span, mostrando el rating con estrellas y la puntuación

  // appendChild es un método que se utiliza para agregar un elemento como hijo de otro elemento. En este caso, estamos agregando el nombre y el rating al div meta, y luego el meta y la fecha al header, y finalmente el header y el comentario al article.

  // ejemplo: padre.appendChild(hijo)
  
  meta.appendChild(nombre);
  meta.appendChild(rating);

  const fecha = document.createElement("small"); // creamos un small para la fecha, para que se muestre en un tamaño más pequeño
  fecha.classList.add("muted"); // le agregamos la clase muted para que se muestre con un color más claro, indicando que es información secundaria
  fecha.textContent = opinion.fecha; // asignamos el texto al small, mostrando la fecha de la opinión

  header.appendChild(meta); // agregamos el div meta al header
  header.appendChild(fecha); // agregamos el small de la fecha al header

  const comentario = document.createElement("p"); // creamos un párrafo para el comentario, para que se muestre debajo del header
  comentario.textContent = opinion.comentario; // asignamos el texto al párrafo, mostrando el comentario de la opinión

  article.appendChild(header); // agregamos el header al article, para que se muestre en la parte superior del artículo
  article.appendChild(comentario); // agregamos el comentario al article, para que se muestre debajo del header

  return article; // finalmente, retornamos el article completo, que es el elemento HTML que representa la opinión, con toda su estructura y contenido.
}

function renderOpinions(list) { // esta función se encarga de renderizar la lista de opiniones en el contenedor del HTML. Recibe como parámetro la lista de opiniones que queremos mostrar.

  const contenedor = document.querySelector("#opiniones"); // seleccionamos el contenedor del HTML donde queremos mostrar las opiniones, utilizando el selector de ID "#opiniones". Este contenedor es un elemento del DOM que ya existe en el HTML, y es donde vamos a agregar los elementos de opinión que hemos creado.
  contenedor.replaceChildren(); // replaceChildren() es un método que se utiliza para eliminar todos los hijos de un elemento y reemplazarlos con nuevos elementos. En este caso, lo usamos para limpiar el contenedor antes de agregar las nuevas opiniones, asegurándonos de que no haya opiniones duplicadas o antiguas cada vez que renderizamos la lista.

  list.forEach((opinion) => { // utilizamos el método forEach para iterar sobre cada opinión en la lista de opiniones. Por cada opinión, ejecutamos una función que recibe la opinión como argumento.
    const el = createOpinionElement(opinion); // dentro de la función, llamamos a createOpinionElement(opinion) para crear un elemento HTML que representa la opinión actual. Esta función devuelve un elemento article con toda la estructura y contenido de la opinión.
    contenedor.appendChild(el); // finalmente, agregamos el elemento creado al contenedor utilizando appendChild, lo que hace que la opinión se muestre en la página web dentro del contenedor designado.
  });
}

renderOpinions(opiniones);
