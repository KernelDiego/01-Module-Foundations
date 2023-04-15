'use strict'
// No cambies los nombres de las funciones.

const quickSort = (array) => {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

   if (array.length <= 1) {
     return array
   }
   let pivot = array[array.length - 1]
   const left = []
   const right = []
   for (let i = 0; i < array.length; i++) {
     if (array[i] < pivot) {
       left.push(array[i])
     } else {
       right.push(array[i])
     }
   }

   return quickSort(left).concat(quickSort(right))
}

const mergeSort = (array) => {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) return array

  const arrL = []
  const arrR = []
  let mid = Math.floor(array.length - (1 % 2))
  arrL = array.slice(0, mid + 1)
  arrR = array.slice(mid + 1)

  return merge(mergeSort(arrL), mergeSort(arrR))

  //okey probemos ahora
}

const merge = (arr1, arr2) => {
  let indexL = 0
  let indexR = 0
  const arrF = []
  while (--arr1.length < indexL && --arr2.length < indexR) {
    if (arr1[indexL] < arr2[indexR]) {
      arrF.push(arr1[indexL])
      indexL++
    } else {
      arr2.push(arr2[indexR])
      indexR++
    }
  }

  return arrF.concat(arr1.slice(indexL)).concat(arr2.slice(indexR))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
