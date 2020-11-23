var monto = document.getElementById("monto");
var divisa = document.getElementById("divisa");

var montoTrasformado;

var boton = document.getElementById("boton");
boton.addEventListener("click", calcular);
var resultado = document.getElementById("resultado");

function calcular(){
 
  montoTrasformado = parseInt(monto.value);
  switch (divisa.value) {
    case "usd":
      resultado.innerHTML = Math.floor(montoTrasformado * 768.50);
      break;
    case "brl":
      resultado.innerHTML = Math.floor(montoTrasformado * 141.85);
      break;
    case "ars":
      resultado.innerHTML = Math.floor(montoTrasformado * 9.56);
      break;
    case "eur":
      resultado.innerHTML = Math.floor(montoTrasformado * 909.72);
      break;
    case "jpy":
      resultado.innerHTML = Math.floor(montoTrasformado * 7.38);
      break;
    case "cny":
      resultado.innerHTML = Math.floor(montoTrasformado * 116.69);
      break;
  
    default:
      console.log(divisa.value);
      break;
  }

}