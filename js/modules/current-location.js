import initAlertUser from "./alert-user.js";

export default function initCurrentLocation() {
  // Pede a localização do usuario, se aceitar adiciona as coordenadas ao iframe, se recusar, dá um erro.

  const btnLocation = document.querySelector('#btn-add-location');
  const inputLocation = document.querySelector('#data-location');
  const spanContent = document.querySelector('#span-location');

  if (btnLocation) {

    if ("geolocation" in navigator) {

      function geoSuccess(position) {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        inputLocation.value = `https://embed.waze.com/pt-BR/iframe?zoom=12&lat=${userLatitude}&lon=${userLongitude}&pin=1`;

        if (!btnLocation.classList.contains('disabled'))
          btnLocation.classList.toggle('disabled');
        if (spanContent.classList.contains('d-none'))
          spanContent.classList.toggle('d-none');

        setTimeout(() => {
          if (!spanContent.classList.contains('show'))
            spanContent.classList.toggle('show');
        }, 250);
      }

      function geoError(error) {
        initAlertUser('danger', 'Houve um erro! Não é possivel adicionar a localização atual, tente novamente.');
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





