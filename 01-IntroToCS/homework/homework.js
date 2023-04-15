"use strict";

function BinarioADecimal(num) {
  var suma = 0;
  var posicion = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    suma = suma + num[i] *2 ** posicion; 
    posicion++;
  }
  return suma;
}

function DecimalABinario(num) {
  var resultado = "";
  while(num !== 0){
    resultado = num % 2 + resultado;
    num = Math.floor(num/2);
  }
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
