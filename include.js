const BASE_URL = "/flasio/";

function loadComponent(id, file) {
  fetch(BASE_URL + file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");