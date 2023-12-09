document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  //Establezco la cantidad de días de Diciembre
  const numeroDeDias = 31;

  //Arranco un bucle en 1 que se le va a sumar 1 hasta 31 (total de dias del mes)
  for (let i = 1; i <= numeroDeDias; i++) {
    //Elemento div para los dias y le agrego clases (la clase del día va a depender del valor de i)
    let dayElement = document.createElement("div");
    dayElement.classList.add("container-item", `day${i}`);

    //Elemento div para cada cuadro del calendario y le agrego clase
    let tileElement = document.createElement("div");
    tileElement.classList.add("tile");

    //elemento div de la cara que se ve al principio y se le agrega clase
    let frontElement = document.createElement("div");
    frontElement.classList.add("front");

    // Use la api de js para saber que numero de dia cae cual dia de la semana
    let currentDate = new Date(`December ${i}, 2023`);

    // Traigo el numero que corresponde al dia de la semana
    let dayOfWeek = currentDate.getDay();

    // Genero un array para ponerle el nombre que voy a mostrar de cada dia de la semana
    let daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    // Pongo el contenido en el cuadro de cada dia
    frontElement.textContent = `${daysOfWeek[dayOfWeek]} ${i}`;

    let imageElement = document.createElement("img");
    imageElement.src = `./imagenes/Navidad${i}.png`;
    imageElement.classList.add("img");

    let backElement = document.createElement("div");
    backElement.classList.add("back");
    let noteTextArea = document.createElement("textarea");
    noteTextArea.classList.add("note-text");
    noteTextArea.placeholder = "Escribe tu nota...";

    //Apendeo los elementos del bucle y cada dia al container general del calendario
    tileElement.appendChild(frontElement);
    tileElement.appendChild(backElement);
    tileElement.appendChild(imageElement);
    backElement.appendChild(noteTextArea);
    dayElement.appendChild(tileElement);
    container.appendChild(dayElement);
  }

  //Arreglarlo mañana :)
  container.addEventListener("input", function (event) {
    const target = event.target;
    if (target && target.classList.contains("note-text")) {
      const dayKey = `day${target.parentNode.classList[1].substring(3)}`;
      localStorage.setItem(dayKey, target.value);
    }
  });

  for (let i = 1; i <= numeroDeDias; i++) {
    const dayKey = `day${i}`;
    const noteTextArea = document.querySelector(`.${dayKey} .note-text`);
    if (noteTextArea) {
      const storedNote = localStorage.getItem(dayKey);
      if (storedNote) {
        noteTextArea.value = storedNote;
      }
    }
  }
});
