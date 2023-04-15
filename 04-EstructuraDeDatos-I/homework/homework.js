'use strict'

// EJERCICIO 1
const nFactorial = (n) => {
  if (n === 1 || n === 0) return 1
  else if (n < 0) return 0
  return n * nFactorial(n - 1)
}

// EJERCICIO 2
const nFibonacci = (n) =>  n < 2 ? n : nFibonacci(n - 1) + nFibonacci(n - 2)

// EJERCICIO 3
// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.

const Queue = () => {
  const array = []
  this.size = () => array.length
  this.enqueue = element => array.push(element)
  this.dequeue = element => array.shift(element)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
}
