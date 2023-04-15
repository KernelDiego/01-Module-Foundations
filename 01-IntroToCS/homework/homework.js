'use strict'

function BinarioADecimal(num) {
  return num
    .split('')
    .reverse()
    .map((e, i) => e * Math.pow(2, i))
    .reduce((a, b) => a + b)
}

function DecimalABinario(num) {
  //   let array = [], div = num
  //   while(div > 0) {
  //     if (div % 2 === 0) array.push(0)
  //     else array.push(1)
  //     div = Math.floor(div / 2)
  //   }
  //   return array.reverse().join('')

  let binary = ''
  while (num > 0) {
    binary = (num % 2).toString() + binary
    num = Math.floor(num / 2)
  }
  return binary
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
