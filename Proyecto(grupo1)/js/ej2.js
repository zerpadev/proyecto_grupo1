function concatenarPalabras(palabras) {
    var resultado = "";
  
    for (var i = 0; i < palabras.length; i++) {
      resultado = resultado.concat(palabras[i]);
      if (i < palabras.length - 1) {
        resultado = resultado.concat(" ");
      }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso
  var palabras = ["Lorem", "ipsum", "dolor,", "sit", "amet", "consectetur", "adipisicing", "elit."];
  var resultadoConcatenado = concatenarPalabras(palabras);
  document.write(resultadoConcatenado);