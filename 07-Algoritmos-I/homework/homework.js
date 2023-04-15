'use strict'
// No cambies los nombres de las funciones.

const factorear = (num) => {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let arr = [1]
  for (let i = 1; num > 1; i++) {
    if (i !== 1 && num % i === 0) {
      num /= i
      arr.push(i)
      i--
    }
  }
  return arr
}

const swap = (array, idx1, idx2) => {
  var aux = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = aux
}

const bubbleSort = (array) => {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let mayor = array[j]
        array[j] = array[j + 1]
        array[j + 1] = mayor
      }
    }
  }
  return array
}
bubbleSort([5, 1, 4, 2, 8])

const insertionSort = (array) => {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let aux = array[i]
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = aux
  }
  return array
}

const selectionSort = (array) => {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
    if (minIndex !== i) swap(array, i, minIndex)

    // let aux = array[i];
    // array[i] = array[minIndex];
    // array[minIndex] = aux;
  }
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
}
