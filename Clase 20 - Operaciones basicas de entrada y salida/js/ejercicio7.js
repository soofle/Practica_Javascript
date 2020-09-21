var horaInicio = parseInt(window.prompt("Ingrese la hora de inicio"));
var horaFin = parseInt(window.prompt("Ingrese la hora de finalización"));

window.alert((horaFin < horaInicio) ? "Ha ocurrido un error" : "Se agendó el horario de su reunión");