var codigos = [];

function agregarCodigo() {
  var codigoInput = document.getElementById("codigo");
  var codigo = parseInt(codigoInput.value);

  if (codigo !== 0) {
    codigos.push(codigo);
    codigoInput.value = "";
  } else {
    codigoInput.disabled = true;
  }
}

function buscarCodigo() {
  var codigoBusqueda = parseInt(document.getElementById("codigoBusqueda").value);
  var posicion = -1; // Valor inicial para indicar que no se encontró el código

  for (var i = 0; i < codigos.length; i++) {
    if (codigos[i] === codigoBusqueda) {
      posicion = i;
      break; // Detenemos el ciclo al encontrar la primera aparición del código
    }
  }

  var resultado = document.getElementById("resultado");
  if (posicion !== -1) {
    resultado.textContent = "El código " + codigoBusqueda + " se encuentra en la posición " + posicion + " del arreglo.";
  } else {
    resultado.textContent = "Código no cargado.";
  }
}
