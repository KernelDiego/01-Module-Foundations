"use strict";

    /*
    Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
    - size: retorna la cantidad total de nodos del árbol
    - insert: agrega un nodo en el lugar correspondiente (Verificar si es menor a la izq, si es mayor a la derecha)
    - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol.
    - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
    - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)- En anchura, por niveles.

    El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
    */

function BinarySearchTree(value) { //recibe un valor, porque es el que vamos a ingresar
    //¿Que propiedades tenia?
    this.value = value; //nodo raiz
    this.left = null;
    this.right = null; 
}

    //Debemos contar cada uno de los nodos.
BinarySearchTree.prototype.size = function() {
    if(!this.right && !this.left) return 1 // null a la izq, null a la derecha, retorna 1 (el nodo raiz)
    //cuando aplique size, verifica que tenga a la derecha y a la izq nodos,
    //tengo que volver a aplicar la recursividad
    //Tengo que volver a verificar lo mismo.
    //el contexto de ejecucion de la izq se destruye, y hay que volver a preguntar por el nodo de la derecha
    if(this.right && this.left) return 1 + this.left.size() + this.right.size()//me devuelve la suma del root + nodo izq + nodo derecha
    if(this.right) return 1 + this.right.size()
    if(this.left) return 1 + this.left.size()
}


    //¿Que es lo que vamos a insertar? un nuevo arbol
    //Tengo un this.value, ¿que tengo que verificar?
BinarySearchTree.prototype.insert = function(value){ //este value es el numero que se va a insertar
    if(value > this.value){ //this.value es el root
        //Si no tengo nada
        if(!this.right){ //this.right === null
            this.right = new BinarySearchTree(value) //si es mas grande, lo inserto a la derecha
        }
        else {
        //aca llega la recursividad, si esta ocupado a la derecha
        //vuelve a ingresar al primer if
            this.right.insert(value)
        }
    }
    //si el value no es mayor
    else {
        //si a la izq no tngo nada, le inserto el nuevo valor
        if(!this.left){
            this.left = new BinarySearchTree(value)
        }
        //pero si hay algo, preguntamos otra vez
        else {
            this.left.insert(value)
        }
    }
}
    // var newBST = new BinarySearchTree(20)
    // newBST.insert(22)
    // console.log(newBST)

BinarySearchTree.prototype.contains = function(value){//recibe un value que quiere buscar
    if(value === this.value) return true //retorna a la primera, si es el del root, lo encontre
    if(value > this.value){//significa que va a ir para la derecha
        if(!this.right) return false //descartamos los mayores, si no hay nada a la derecha
        else {
            return this.right.contains(value) //si hay algo, segui buscando
        }
    }
        //ahora tenemos que hacer los mismo con la izquierda
        if(value < this.value){ //si el valor es menor a la raiz
        if(!this.left) return false //si no hay izq, no está
        else{
            return this.left.contains(value)
        }
    }
}

    // Lo va recorriendo, y cuando se encuentra con el valor, se ejecuta el callback y se pushea a un array, ver test
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
    //"in-order": (izq- root- derecha)
    if(!order || order === 'in-order') { //pregunta por la izquierda- Si no tiene order, pedia por defecto
        if(this.left) this.left.depthFirstForEach(cb, order) //va a volver a ingresar al if
        //cuando no ingresa más acá es porque se termino el recorrido
        cb(this.value) //var arr = [] el calback es una funcion cb(this.value){arr.push(value)} Este representa el nodo raiz
        //ya recorri mi nodo izquierda, root,  paso al derecho
        if(this.right) this.right.depthFirstForEach(cb, order)
    }
    else if(order === 'pre-order') { //hace exactamente lo mismo pero cambia el orden del recorrido  (root- left- right) 
        cb(this.value) //representa el nodo raiz
        if(this.left) this.left.depthFirstForEach(cb, order)
        if(this.right) this.right.depthFirstForEach(cb, order)
    }
    //'post-order'
    else {  
        if(this.left) this.left.depthFirstForEach(cb, order)
        if(this.right) this.right.depthFirstForEach(cb, order)
        cb(this.value) //representa nodo raiz
    }
}


    //Necesitamos un callback y un array, para que cada vez que se ejecute se vayan pusheando los valores.
    //El callback es quien va pintando
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
    //por niveles, ingresa a breadthFirstForEach y se ejecuta el callback
    cb(this.value) //Recorro el root, pinta el 20
    //necesito un aux, en este caso el array
    //tenemos que pintar los de la izq, y los de la derecha
    //recursivamente, saca el primer elemento del array y aplica recursividad
    //pintados = 20          arr= [ 15,25 ] -->bst.png
    //pintados 20, 15, 25    
    //Recursivamente va a sacar el primer elemento del array, el 15, le hace recursivamente, la misma funcion, la misma pregunta: hay algo a la izq, hay algo a la derecha, pushea los valores  arr= [5,17] cuando termina ese contexto de ejecucion, pasa al 25.
    //saca el 5 lo pinta y pregunta izq? derecha ? lo pushea al array[0,14]
    
    //si tengo algo a la izquierda, lo pusheo al array
    if(this.left) {
        array.push(this.left)
    }
    //si tengo algo a la derecha, lo pusheo al array
    if(this.right){
        array.push(this.right)
    }
  //Acá hacemos la recursividad
  //Si el array tiene elementos, sacamos el primero y hacemos recursion, para recorrer de izquierda a derecha
  //[15,25]
    if(array.length > 0){
        array.shift().breadthFirstForEach(cb, array)
    }

}