/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/


//¿Que debemos plantear en la recursion? Un caso de corte
function nFactorial(n) {
    if(n > -1 && n < 2 ) return 1
    //Posibles casos de corte
    //if(n === 0 || n ===1) return 1
    //if(n < 0 ) return 0
    return n * nFactorial(n-1)
}

  //nFactorial(3) PAUSA, se genera otro contexto de ejecución
  // return 3 * nFactorial(3-2)   PAUSA, se genera otro contexto de ejecución, aun falta resolver nFactorial(2)
             //       nFactorial(2)
             //             return 2 * nFactorial(2-1)   PAUSA
             //                        nFactorila(1)  Entra en el caso de corte return 1

  //-----------------------------------
  //FIBONACCI
  //¿Cómo funciona esta secuencia?
  //Un valor que obtengo por la suma de los dos nros anteriores.
  //n = me pasan un valor en la posicion x que vale 8, no conozco que hay detras.//quiero el valor de finobacci en la posocion 6 por ejemplo /     n es la posicion
  // ¿Cuales son los unicos valores que conozco? 0 y 1    Acá tenemos nuestro caso base
function nFibonacci(n) {
    if(n === 1) return 1
    if(n === 0) return 0
    //if(n < 2) return n
    
    //Desde el elemento que nos den, nos vamos a ir para atras, para atras, hasta que lleguemos a 0 y 1.
    //Cuando llegamos ahi, comenzamos a volver, ¿Cómo volvemos? Sumando un elemento con el siguiente. o un elemento sumado a los dos anteriores nos da el valor.
    return nFibonacci (n - 2) + nFibonacci(n -1)

}
                                  // va a ir a otro contexto nFibonacci(3 - 2) --> (1) //¿Va aplicar recursividad?? No, porque es un caso base--> nos return 1
  //Comienza aqui➡ nFibonacci(3),⬆ JS es secuncial, va a frenar aca, porque se genera otro contexto
  //                              ⬇         
  //                              nFibonacci ( 3-1)  --> nFibonacci (3-1) = (2) --> aplica recursividad, y queda  en pausa:
  //                               nFibonacci(n - 2)  -->nFibonacci(2 - 2) = (0) --> return 0
  //                               nFibonacci(n -1)  -->  nFibonacci(2 -1) = (1) --> return 1   suma con el 0, nos da 1, el contexto se destruye nFibonacci(2) se resuelve

  //nFibonacci(3)  --> puede sumar 1 + 1 = 2, resuelve y su contexto se destruye
  //Contar las posiciones, nFibonacci(3) me da 2




/*
    Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
    - enqueue: agrega un valor respetando el orden.
    - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
    - size: retorna el tamaño (cantidad de elementos) de la queue.

    Pueden utilizar class o función constructora.
  */
  //Esta estructura de datos no venia nativa en JS
  //Debiamos generar una clase

  //funcion contrutora
  //Debemos crear nuestra propia clase
  ///Tienen el mismo funcionalidades a las funciones de clase.
function Queue() {
    this.array = [] //this apuntaba al objeto.
}
  
//¿Cómo haciamos para agregar un método?
Queue.prototype.enqueue = function(value){
    //encargado de agregar valores a la cola
    this.array.push(value);
}

Queue.prototype.dequeue = function(){
    //Si yo se lo pusheo, ¿Cómo se los saco?
    //lo retornamos para que nos muestre ese valor
    //método shift: Si el array está vacío retorna"undefined"
    return this.array.shift(); 
}

Queue.prototype.size = function(){
  //¿Cuando tenemos array que podemos usar para saber el tamaño?
    return this.array.length;
}

  //Probar lo siguiente: 

  // var queue = new Queue();
  // console.log(queue)
  // queue.enqueue(2)
  // queue.enqueue(3)
  // queue.enqueue(4)
  // console.log(queue)

  // queue.dequeue()
  // console.log(queue)
