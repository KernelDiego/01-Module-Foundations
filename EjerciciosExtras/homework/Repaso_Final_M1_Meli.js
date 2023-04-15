
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];  Vamos a ir iterando, recorriendo el array, y cuando nos        encontremos con un array, hacemos recursion
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    let suma = 0 //vamos a ir sumando los numeros dentro del array
    
    for (let i = 0; i < array.length; i++) {
        
        //Es un numero, lo sumo, es un array, hago recursion
        if(Array.isArray(array[i])){  //nos da true o false, de la clase Array, por eso comienza en mayuscula, es un método de los Array
            //necesito lo que habia en suma, lo que ya tenias de antes, ese 1, sumale lo que hay en countArray 
            suma = suma + countArray(array[i])  // suma+= countArray(array[i])
            //suma = 1 + countArray(array[i])
        }
        else{ //si no es un array, suma lo que tenias antes con ese nuevo numero
            suma = suma + array[i] //  suma+= array[i]   suma = 0 + 1
        }
    }
    return suma
}
//countArray([1, [2, [3,4]], [5,6], 7])
//          i
//La primera vuelta, suma = 1
//entra nuevamente al for

//Estamos en la recursion
//¿Cuanto vale suma? sum = 1 + countArray(array[i]) 
//[2, [3,4]]
// i
//En esta recursion suma = 0 /Estamos en un nuevo contexto de ejecucion)
//i = 2, entra al else  suma = 0 + 2 
//avanza i, es un array, inicia recursion? [3, 4]
//suma = 2 + countArray(array[i]) 
//Ahora evalua [3,4], i esta en el 3, como es un numero entra en else
//suma = 0+ 3 
// Avanza i, entra en el else
//suma = 3 + 4 = 7 
//retorna suma = 7   -->¿quien se habia quedado esperando esta respuesta?
//suma = 2 + countArray(array[i]) -->la recursion resolvio con 7 + suma = 9
// sum = 1 + countArray(array[i]) --> resuelve en 9 + suma 
//suma = 10
//avanza i  -->[5, 6]
//suma = 10 + countArray(array[i])
//suma esta en 0, evalua si es un array y va al else
//suma = 0 + 5 + 6 = 11
//return suma = 10 + 11
//avanza i   i = 7
//else suma = 21 + 7 
//avanza i no hay nada que recorrer, retorna suma = 28






// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total
//ES UN OBJETO ANIDADO
//¿Si tenemos un array es un objeto anidado? No, no contamos el que esta dentro de un array

var countProps = function(obj) {
    // Tu código aca:
    //necesitamos una variable para guardar lo que vamos sumando
    let counter = 0

    //¿Cómo recorremos un objeto?
    for (let propiedad in obj) {   //itera sobre todas las propiedades de un objeto   el for of es para array
        counter++ //si entro necesitamos aumentar el contador
        if(typeof(obj[propiedad]) === 'object')   {//accedemos al valor, como entramos al indice del objeto        typeof(arr)--> 'object'
            if(!Array.isArray(obj[propiedad])){ //Si no es un array donde estamos parados
                counter += countProps(obj[propiedad]) //si estamos dentro de un objeto, debemos recorrerlo otra vez,hacer recursión.
            }
        }
    }
    return counter
}
// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse/cambiar a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    var suma = 0;
    //¿Cómo debiamos iniciar?
    var current = this.head;

    //Recorrer LinkedList
    //Head --> [1]           --> ['2'] --> [false] --> ['Kirikocho]
    //        current.value
    while(current) { 
        //Necesitamos un condicional, para evaluar si podemos cambiar el valor
        if(isNaN(current.value)){ //devuelve un booleano, verifica si es numero o no, da false cuando es un numero. Ej: ¿1 no es un numero? Si hay un numero isNaN da false
            current.value = 'Kiricocho';
            suma++
        }
        current = current.next; //avanza current
    }
    return suma; // 1 la cantidad de cambios que hubo
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var newArr = new Queue(); //Nueva instancia, en el archivo DS.js ya esta creada, el enunciado dice "devolver una nueva Queue"

    //Tenemos que recorrer
    while(queueOne.size() || queueTwo.size()){ //mientras haya
        var first = queueOne.dequeue(); //saco el primer elemento
        var second = queueTwo.dequeue();

        //tenemos que agregarlo a la nueva Queue
        if(first) newArr.enqueue(first); //Llamar al metodo que hace el push
        if(second) newArr.enqueue(second);
    }
    return newArr;  //devolver una nueva Queue que mergeo los nodos de las anteriores.

    //OTRA OPCION:
    // while(queueOne.size() || queueTwo.size() ){
    //     if(queueOne.size()) newArr.enqueue(queueOne.dequeue())
    //      if(queueTwo.size()) newArr.enqueue(queueTwo.dequeue())
    //}
    //return newArr
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

//clousure es una funcion que retorna otra funcion
//en la funcion interna podemos acceder a una variable que estaba en el contextop de ejecucion del padre, si bien su contexto fue destruido, la variable permanece para que podamos reutilizarla.
var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num) { //clousure retorna otra funcion
        return multiplier * num;
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:

    //¿Cómo podemos ir sacando los valores de un arbol?
    //¿Por quien vamos a preguntar? Si existe...
    if(!this.right && !this.left) return this.value; //devuelve el valor del nodo raiz

    //Si a la derecha no hay nada, y a la izquierda si
    if(!this.right && this.left) return this.value + this.left.sum(); //el value + la recursion

    if(this.right && !this.left) return this.value + this.right.sum();

    //¿Cual faltaria? Si tengo los dos
    if(this.right && this.left) return this.value + this.left.sum() + this.right.sum();

    //OTRA OPCION
     // var suma = 0
    // if (this.left) {
    //     suma += this.left.sum()
    // }
    // if (this.right) {
    //     suma += this.right.sum()
    // }
    // return suma + this.value
}