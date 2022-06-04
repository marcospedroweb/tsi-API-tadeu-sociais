import initAlertUser from "./alert-user.js";

export default function initCurrentLocation() {
  // Pede a localização do usuario, se aceitar adiciona as coordenadas ao iframe, se recusar, dá um erro.

  const btnLocation = document.querySelector('#search-location');
  const iframe = document.querySelector('#iframe-location iframe');

  if (btnLocation && iframe) {

    if ("geolocation" in navigator) {

      function geoSuccess(position) {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        iframe.src = `https://embed.waze.com/pt-BR/iframe?zoom=12&lat=${userLatitude}&lon=${userLongitude}&pin=1`;
      }

      function geoError(error) {
        initAlertUser('danger', 'Houve um erro! Não é possivel adicionar a localização atual, tente novamente.');
        console.log(error);
      }

      const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 30000,
      }

      btnLocation.addEventListener('click', event => {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
      });
    } else {
      initAlertUser('danger', 'Ops, seu navegador não suporta geolocation');
    }

  }


}





