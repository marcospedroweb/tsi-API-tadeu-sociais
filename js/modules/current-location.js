import initAlertUser from "./alert-user.js";

export default function initCurrentLocation() {
  // Pede a localização do usuario, se aceitar adiciona as coordenadas ao iframe, se recusar, dá um erro.

  const btnLocation = document.querySelector('#search-location');
  const divIframe = document.querySelector('#iframe-location');
  const iframeLocation = document.querySelector('#iframe-location iframe');

  if (btnLocation && iframeLocation) {

    if ("geolocation" in navigator) {

      function geoSuccess(position) {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        Object.keys(coordsBrazilStates).forEach((state) => {
          const conditionLatidute = userLatitude < parseInt(coordsBrazilStates[state][0]) && userLatitude > parseFloat(`${parseInt(coordsBrazilStates[state][0])}.99`);
          const conditionLongitude = userLongitude < parseInt(coordsBrazilStates[state][1]) && userLongitude > parseFloat(`${parseInt(coordsBrazilStates[state][1])}.99`)

          if (conditionLatidute && conditionLongitude) {
            if (divIframe.classList.contains('d-none'))
              divIframe.classList.toggle('d-none');
            iframeLocation.src = `https://embed.waze.com/iframe?zoom=16&lat=${userLatitude}&lon=${userLongitude}&pin=1`;
          }


        });
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





