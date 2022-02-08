const API1 = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=00";
let html = "";

//SE CREA LA FUNCION
const getAPI1 = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.next, json.previous);
    })
    .catch((error) => {
      console.log("Error in the API :", error);
    });
};

//SE CREA LA FUNCION PARA LLAMAR AL PESO, IMAGEN, Y ALTURA
const getImage = (url) => {
  return fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      fillImage(json);
    })
    .catch((error) => {
      console.log("error en la api" + error);
    });
};

// SE UNEN LAS FUNCIONES
const fillData = (data) => {
  data.forEach((item) => {
    getImage(item.url);
  });
};

//SE IMPRIME CON EL NOMBRE DE FILL DE LA SEGUNDA URL
const fillImage = (dataIma) => {
  console.log(dataIma);
  html += '<div class="col">';
  html += '<div class="card h-100">';
  html += `<img src="${dataIma.sprites.other.dream_world.front_default}" class="card-img-top poken">`;
  html += '<div class="bg-second card-footer">';
  html += '<div class="card-body">';
  html += `<h5 class="card-title">${dataIma.name}</h5>`;
  html += `<p>Altura: ${dataIma.height}</p>`;
  html += `<p>Peso: ${dataIma.weight}</p>`;
  html += "</div>";
  html += "</div>";
  html += "</div>";
  html += "</div>";

  document.getElementById("characters").innerHTML = html;
};

const pagination = (next, previous) => {
  let html = "";

  html += `<li class="page-item ${
    previous == null ? (previousDisabled = "diasable") : ""
  }"><a class="btn btn-outline-warning" onclick="getAPI1('${previous}')">Prev</a></li> `;
  html += `<li class="page-item ${
    next == null ? (nextDisabled = "diasable") : ""
  }"><a class="btn btn-outline-warning" onclick="getAPI1('${next}')">Next</a></li> `;

  document.getElementById("pagination").innerHTML = html;
};

getAPI1(API1);
