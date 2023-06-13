// Declaración del arreglo de temperaturas
var tempEnero = [22, 21, 26, 18, 19, 21, 32, 21, 21];

// a. Mostrar el primer día en el que la temperatura promedio del día fue igual al promedio mensual
var promedioMensual = tempEnero.reduce((total, temp) => total + temp, 0) / tempEnero.length;
var promedioMensual = Math.round(promedioMensual)

var primerDia = -1; // Valor inicial para indicar que no se ha encontrado ningún día

for (var i = 0; i < tempEnero.length; i++) {
  if (tempEnero[i] === promedioMensual) {
    primerDia = i + 1; // Sumamos 1 para obtener el día correcto
    break; // Detenemos el ciclo al encontrar la primera coincidencia
  }
}

if (primerDia !== -1) {
  document.write("El primer día con temperatura promedio igual al promedio mensual es el día " + primerDia + "<br>");
} else {
  document.write("No se encontró ningún día con temperatura promedio igual al promedio mensual<br>");
}

// b. Mostrar los días en los que la temperatura promedio fue igual al promedio mensual
var diasIgualesPromedio = [];

for (var i = 0; i < tempEnero.length; i++) {
  if (tempEnero[i] === promedioMensual) {
    diasIgualesPromedio.push(i + 1); // Sumamos 1 para obtener el día correcto
  }
}

if (diasIgualesPromedio.length > 0) {
  document.write("Los días en los que la temperatura promedio fue igual al promedio mensual son: " + diasIgualesPromedio + "<br>");
} else {
  document.write("No se encontraron días con temperatura promedio igual al promedio mensual<br>");
}