// Obtener los datos de los personajes de la API
fetch("https://api-marvel-v1.onrender.com/marvel/personajes")
  .then((response) => response.json())
  .then((personajes) => {
    // Obtener el contenedor de tarjetas
    const container = document.getElementById("container");

    // Crear una plantilla para la tarjeta de personaje
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
        </div>
      </div>
    `;

    // Crear una tarjeta para cada personaje
    personajes.forEach((personaje) => {
      // Clonar la plantilla de la tarjeta
      const card = template.content.cloneNode(true);

      // Asignar la imagen, nombre y habilidades del personaje a la tarjeta
      const img = card.querySelector(".card-img-top");
      img.src = personaje.img;

      const title = card.querySelector(".card-title");
      title.textContent = personaje.name;

      const text = card.querySelector(".card-text");
      text.textContent = `Skills: ${personaje.skills.join(", ")}`;

      // Agregar la tarjeta al contenedor
      container.appendChild(card);
    });
  });
