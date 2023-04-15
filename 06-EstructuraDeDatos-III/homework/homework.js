'use strict'

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}
BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value)
    this.right
      ? this.right.insert(value)
      : (this.right = new BinarySearchTree(value))
  if (value < this.value)
    this.left
      ? this.left.insert(value)
      : (this.left = new BinarySearchTree(value))
}
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true
  if (value > this.value)
    return !this.right ? false : this.right.contains(value)
  if (value < this.value) return !this.left ? false : this.left.contains(value)
}
BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1
  if (this.left && !this.right) return 1 + this.left.size()
  if (!this.left && this.right) return 1 + this.right.size()
  if (this.left && this.right) return 1 + this.left.size() + this.right.size()
}
BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = 'in-order'
) {
  switch (order) {
    case 'pre-order':
      cb(this.value)
      this.left && this.left.depthFirstForEach(cb, order)
      this.right && this.right.depthFirstForEach(cb, order)
      break
    case 'post-order':
      this.left && this.left.depthFirstForEach(cb, order)
      this.right && this.right.depthFirstForEach(cb, order)
      cb(this.value)
      break
    case 'in-order':
      this.left && this.left.depthFirstForEach(cb, order)
      cb(this.value)
      this.right && this.right.depthFirstForEach(cb, order)
      break
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value)
  this.left && array.push(this.left)
  this.right && array.push(this.right)
  array.length && array.shift().breadthFirstForEach(cb, array)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
}
