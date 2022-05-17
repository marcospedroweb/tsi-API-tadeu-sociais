import initAlertUser from "./alert-user.js";

export default function initCurrentLocation() {

}

const linksGetLocation = document.querySelectorAll('.add-location');
const linksRemoveLocation = document.querySelectorAll('.remove-location');
const coordsBrazilStates = {
  AC: [-8.77, -70.55]
  , AL: [-9.71, -35.73]
  , AM: [-3.07, -61.66]
  , AP: [1.41, -51.77]
  , BA: [-12.96, -38.51]
  , CE: [-3.71, -38.54]
  , DF: [-15.83, -47.86]
  , ES: [-19.19, -40.34]
  , GO: [-16.64, -49.31]
  , MA: [-2.55, -44.30]
  , MT: [-12.64, -55.42]
  , MS: [-20.51, -54.54]
  , MG: [-18.10, -44.38]
  , PA: [-5.53, -52.29]
  , PB: [-7.06, -35.55]
  , PR: [-24.89, -51.55]
  , PE: [-8.28, -35.07]
  , PI: [-8.28, -43.68]
  , RJ: [-22.84, -43.15]
  , RN: [-5.22, -36.52]
  , RO: [-11.22, -62.80]
  , RS: [-30.01, -51.22]
  , RR: [1.89, -61.22]
  , SC: [-27.33, -49.44]
  , SE: [-10.90, -37.07]
  , SP: [-23.55, -46.64]
  , TO: [-10.25, -48.25]
}

if (linksGetLocation) {
  const divLocation = document.querySelectorAll('.div-location');
  const spanLocation = document.querySelectorAll('.span-location');

  if ("geolocation" in navigator) {
    linksGetLocation.forEach(elementLink => {
      elementLink.addEventListener('click', event => {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(position => {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;
          Object.keys(coordsBrazilStates).forEach((state) => {
            const conditionLatidute = userLatitude < parseInt(coordsBrazilStates[state][0]) && userLatitude > parseFloat(`${parseInt(coordsBrazilStates[state][0])}.99`);
            const conditionLongitude = userLongitude < parseInt(coordsBrazilStates[state][1]) && userLongitude > parseFloat(`${parseInt(coordsBrazilStates[state][1])}.99`)

            if (conditionLatidute && conditionLongitude) {
              spanLocation.forEach(span => {
                span.textContent = state;
                span.dataset.locationFound = "1";
              });


              if (!elementLink.classList.contains('d-none'))
                elementLink.classList.add('d-none');

              linksRemoveLocation.forEach(element => {
                if (element.classList.contains('d-none'))
                  element.classList.remove('d-none');
              });
            }

          });
        }, erro => {
          console.log(erro);
        });
      });
    });
  } else
    initAlertUser('danger', 'Ops, seu navegador não suporta geolocation');

  linksRemoveLocation.forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();

      spanLocation.forEach(span => {
        element.textContent = 'Nenhum'
        span.dataset.locationFound = "0";
      });

      if (!element.classList.contains('d-none'))
        element.classList.add('d-none');

      linksGetLocation.forEach(elementLinkAdd => {
        if (elementLinkAdd.classList.contains('d-none'))
          elementLinkAdd.classList.remove('d-none');
      });
    });
  });
}


