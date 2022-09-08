import alertUser from './alert-user.js';

export default class CurrentLocation {
  constructor(btn, input, span) {
    this.btnLocation = document.querySelector(btn);
    this.inputLocation = document.querySelector(input);
    this.spanContent = document.querySelector(span);
  }

  init() {
    // Pede a localização do usuario, se aceitar, adiciona as coordenadas ao iframe, se recusar, dá um erro.

    if (this.btnLocation) {
      if ('geolocation' in navigator) {
        const options = {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 30000,
        };

        this.btnLocation.addEventListener('click', () => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLatitude = position.coords.latitude;
              const userLongitude = position.coords.longitude;
              this.inputLocation.value = `https://embed.waze.com/pt-BR/iframe?zoom=12&lat=${userLatitude}&lon=${userLongitude}&pin=1`;

              if (!this.btnLocation.classList.contains('disabled'))
                this.btnLocation.classList.toggle('disabled');
              if (this.spanContent.classList.contains('d-none'))
                this.spanContent.classList.toggle('d-none');

              setTimeout(() => {
                if (!this.spanContent.classList.contains('show'))
                  this.spanContent.classList.toggle('show');
              }, 250);
            },
            () => {
              alertUser.init(
                'danger',
                'Houve um erro! Não é possivel adicionar a localização atual, tente novamente.',
              );
            },
            options,
          );
        });
      } else {
        alertUser.init('danger', 'Ops, seu navegador não suporta geolocation');
      }
    }
  }
}
