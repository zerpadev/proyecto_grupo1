var grupoTP = ["Lucas Zerpa", 9, "Manuel Vargas", 7, "Vilte Daniel", 8, "Juan Perez", 2, "Maria Jose",10 ];

var sumaNotas = 0;
var cantidadIntegrantes = 0;

for (var i = 1; i < grupoTP.length; i += 2) {
  sumaNotas += grupoTP[i];
  cantidadIntegrantes++;
}

var promedioNotas = sumaNotas / cantidadIntegrantes;
var promedioNotas = Math.round(promedioNotas)

document.write("El promedio de las notas del grupo es: " + promedioNotas + "<br>");

var notaMasAlta = -Infinity;
var notaMasBaja = Infinity;

for (var i = 1; i < grupoTP.length; i += 2) {
  var nota = grupoTP[i];
  
  if (nota > notaMasAlta) {
    notaMasAlta = nota;
  }
  
  if (nota < notaMasBaja) {
    notaMasBaja = nota;
  }
}

document.write("La nota más alta es: " + notaMasAlta + "<br>");
document.write("La nota más baja es: " + notaMasBaja + "<br>");