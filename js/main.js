(function () {
  "use strict";
  //Regalo
  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function () {

    //Campos Datos de Campo
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //Campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_completo = document.getElementById('pase_completo');
    var pase_dosdias = document.getElementById('pase_dosdias');

    //botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var resultado = document.getElementById('lista-productos');

    //extras
    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');

    //Total
    var total = document.getElementById('suma-total');


    // Eventos
    calcular.addEventListener('click', calcularMontos);
    pase_dia.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);
    nombre.addEventListener('blur', validarCampos);
    apellido.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarEmail);

    //Validación de campos para nombre, apellido
    function validarCampos() {
      if (this.value === '') {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Campo obligatorio";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      } else {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      }
    }

    //Validar email
    function validarEmail() {
      if (this.value.indexOf('@') > -1) {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      } else {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Campo obligatorio";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }
    }

    function calcularMontos(event) {
      event.preventDefault();
      if (regalo.value == '') {
        alert('Debes elegir un regalo');
        regalo.focus();
      } else {
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletosCompleto = parseInt(pase_completo.value, 10) || 0,
          boletosDosDias = parseInt(pase_dosdias.value, 10) || 0,
          cantidadCamisa = parseInt(camisas.value, 10) || 0,
          cantidadEtiquetas = parseInt(etiquetas.value, 10) || 0;

        var totalPagar = (boletosDia * 30) + (boletosCompleto * 50) +
          (boletosDosDias * 45) + ((cantidadCamisa * 10) * .93) +
          (cantidadEtiquetas * 2);

        var listadoProductos = [];

        if (boletosDia >= 1) {
          if (boletosDia == 1) {
            listadoProductos.push(boletosDia + ' Pase por día');
          } else {
            listadoProductos.push(boletosDia + ' Pases por día');
          }
        }

        if (boletosCompleto >= 1) {
          if (boletosCompleto == 1) {
            listadoProductos.push(boletosCompleto + ' Pase completo');
          } else {
            listadoProductos.push(boletosCompleto + ' Pases completos');
          }
        }

        if (boletosDosDias >= 1) {
          if (boletosDosDias == 1) {
            listadoProductos.push(boletosDosDias + ' Pase por dos días');
          } else {
            listadoProductos.push(boletosDosDias + ' Pases por dos días');
          }
        }

        if (cantidadCamisa >= 1) {
          if (cantidadCamisa == 1) {
            listadoProductos.push(cantidadCamisa + ' Camisa');
          } else {
            listadoProductos.push(cantidadCamisa + ' Camisas');
          }
        }

        if (cantidadEtiquetas >= 1) {
          if (cantidadEtiquetas == 1) {
            listadoProductos.push(cantidadEtiquetas + ' paquete de etiquetas');
          } else {
            listadoProductos.push(cantidadEtiquetas + ' paquetes de etiquetas');
          }
        }

        resultado.style.display = "block";

        resultado.innerHTML = '';
        for (let i = 0; i < listadoProductos.length; i++) {
          resultado.innerHTML += listadoProductos[i] + '<br/>';
        }

        total.innerHTML = '$ ' + totalPagar.toFixed(2);

      }
    }

    function mostrarDias(event) {

      var boletosDia = parseInt(pase_dia.value, 10) || 0,
        boletosCompleto = parseInt(pase_completo.value, 10) || 0,
        boletosDosDias = parseInt(pase_dosdias.value, 10) || 0;

      var diasElegidos = [];

      if (boletosDia > 0) {
        diasElegidos.push('viernes');
      }
      if (boletosCompleto > 0) {
        diasElegidos.push('viernes', 'sabado', 'domingo');
      }
      if (boletosDosDias > 0) {
        diasElegidos.push('viernes', 'sabado');
      }

      for (let i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = 'block';
      }
    }


  }); //DOM Content Loaded
})();
