// Declaración del arreglo de temperaturas
var tempEnero = [22,17,26,18,19,21,32,28,30];

// a. Mostrar el primer elemento del arreglo
var primerElemento = tempEnero[0];
document.write("Primer elemento del arreglo tempEnero: " + primerElemento + "<br>");

// b. Mostrar el último elemento del arreglo
var ultimoElemento = tempEnero[tempEnero.length - 1];
document.write("Último elemento del arreglo tempEnero: " + ultimoElemento + "<br>");

// c. Mostrar la longitud del arreglo
var longitudArreglo = tempEnero.length;
document.write("Longitud del arreglo tempEnero: " + longitudArreglo + "<br>");

// d. Mostrar un arreglo diasCalidos[] con días por encima del promedio mensual
var promedioMensual = tempEnero.reduce((total, temp) => total + temp, 0) / tempEnero.length;
var promedioMensual = Math.round(promedioMensual)
var diasCalidos = tempEnero.filter(temp => temp > promedioMensual);
document.write("Días con temperatura por encima del promedio(días calidos): " + diasCalidos + "<br>");

// e. Agregar el promedio al final del arreglo tempEnero[]
tempEnero.push(promedioMensual);
document.write("Promedio mensual añadido al final del arreglo: " + tempEnero + "<br>");

// f. Agregar el promedio al principio del arreglo diasCalidos[]
diasCalidos.unshift(promedioMensual);
document.write("Promedio mensual añadido al principio del arreglo de días calidos: " + diasCalidos + "<br>");