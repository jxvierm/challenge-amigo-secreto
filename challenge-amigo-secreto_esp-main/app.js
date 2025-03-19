//array para almacenar los nombres amigos 
let amigos = [];

/**
 * Agrega un nuevo amigo al array de amigos.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
  
    if (nombreAmigo.trim() === "") {
      alert("Por favor, inserte un nombre");
    } else {
      amigos.push(nombreAmigo);
      document.querySelector("#amigo").value = "";
      mostrarListaAmigo();
    }
  }

  /**
   * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
   */
  function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML);
    }
  }
