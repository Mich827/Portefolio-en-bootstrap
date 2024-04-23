const navbar = document.getElementById("navSite");
const scrollTopButton = document.getElementById("scroll-top-button");

window.onscroll = function () {
  if (window.pageYOffset > 700) {
    navbar.classList.remove("bg-transparent", "navbar-dark");
    navbar.classList.add("bg-light", "navbar-light");
    scrollTopButton.classList.add("show");
  } else {
    navbar.classList.add("bg-transparent", "navbar-dark");
    navbar.classList.remove("bg-light", "navbar-light");
    scrollTopButton.classList.remove("show");
  }
};

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // Coordonnées domicile
  const homeCoordinates = [43.2791, 5.3858]; // marseille

  // Initialiser la carte Leaflet
  const map = L.map("map").setView(homeCoordinates, 13);

  // Ajouter un calque de tuiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Ajout d' un marqueur
  L.marker(homeCoordinates).addTo(map).bindPopup("My Home");
});
