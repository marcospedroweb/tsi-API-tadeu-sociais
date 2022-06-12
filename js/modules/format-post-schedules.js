export default function initFormatPostSchedules() {
  const postTime = document.querySelectorAll('.post-time');

  //Função para formatar o timonthtamp
  function formatTimestamp(tempoUsuario) {
    const actualTime = new Date().getTime();
    const second = 1000; // 1000
    const minute = second * 60; // 60.000
    const hour = minute * 60; // 3.600.000
    const day = hour * 24; // 86.400.000
    const week = day * 7; // 604.800.000
    const month = week * 4; // 2.419.200.000
    const year = month * 12; // 29.030.400.000
    tempoUsuario = actualTime - tempoUsuario;

    /*
      What does this function have to return?
      ms = 1000 -> 1 second ago
      ms >= 60.000 -> 1 minute ago 
      ms >= 3.600.000 -> 1 hour ago
      ms >= 86.400.000 -> 1 day ago
      ms >= 604.800.000 -> 1 week ago
      ms >= 2.419.200.000 -> 1 month ago
    */


    if (tempoUsuario < second) {
      return `${tempoUsuario} milesimos atrás`;
    } else if (tempoUsuario < minute) {
      let seg = parseInt(tempoUsuario / second);
      if (seg === 1)
        return `${seg} segundo atrás`;
      else
        return `${seg} segundos atrás`;
    } else if (tempoUsuario < hour) {
      let min = parseInt(tempoUsuario / minute);
      if (min === 1)
        return `${min} minuto atrás`
      else
        return `${min} minutos atrás`;
    } else if (tempoUsuario < day) {
      let horas = parseInt(tempoUsuario / hour);
      if (horas === 1)
        return `${horas} hora atrás`;
      else
        return `${horas} horas atrás`;
    } else if (tempoUsuario < week) {
      let dias = parseInt(tempoUsuario / day);
      if (dias === 1)
        return `${dias} dia atrás`;
      else
        return `${dias} dias atrás`;
    } else if (tempoUsuario < month) {
      let weeks = parseInt(tempoUsuario / week);
      if (weeks === 1)
        return `${weeks} semana atrás`;
      else
        return `${weeks} semanas atrás`;
    } else if (tempoUsuario < year) {
      let monthes = parseInt(tempoUsuario / month);
      if (monthes === 1)
        return `${monthes} mês atrás`;
      else
        return `${monthes} mêses atrás`;
    } else {
      let years = parseInt(tempoUsuario / year);
      if (years === 1)
        return `${years} ano atrás`;
      else
        return `${years} anos atrás`;
    }
  }

  if (postTime[0]) {
    postTime.forEach(time => {
      if (time.dataset.formated == 'false') {
        const timeFormated = formatTimestamp(time.textContent);
        time.textContent = timeFormated;
        time.dataset.formated = true;
      }
    });
  }
}