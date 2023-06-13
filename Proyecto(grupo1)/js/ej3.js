var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function obtenerMensajeDiaSemana(numeroDia) {
  if (numeroDia === 1 || numeroDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es día de Clases";
  }
}

var numeroDiaSemana = 7;
var mensaje = obtenerMensajeDiaSemana(numeroDiaSemana);

document.write("El día " + numeroDiaSemana + " (" + diasSemana[numeroDiaSemana - 1] + ") " + mensaje);