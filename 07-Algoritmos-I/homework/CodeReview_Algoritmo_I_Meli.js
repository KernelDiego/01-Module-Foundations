    'use strict'
    // No cambies los nombres de las funciones.

    function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:

    // Pseudocodigo:
    // vamos a tener un numero q nos llega por parametro(180)
    // ¿que tenemos que empezar a hacer con ese numero 
    // Dividirlo
    // como se si un numero es divisible entre otro??
    // si un numero lo divido entre otro y el resultado es cero, quiere decir q es un numero divisible.
    // Si me da algo que no es cero
    // por ejemplo 45/2 no me da cero, que debo hacer?? aumentar el divisor

    // Esta es la logica
    //  teniendo esto sabemos q necesitamos dos cosas
    // un arreglo de factores, que siemre empieza con 1, todo numero que dividian por uno les va  a dar el mismo numero.
    var arregloFactores = [1]
    
    // Despues van a tener una variable q es el divisor
    // con que va a empezar???
    // En 2, porque el 1 ya lo incluimos, el 2 es por quien vamos a dividir
    var divisor = 2

    //Mientras el numero sea menor a 1 dividilo
    while(num > 1) {
        // Si el numero cuando lo divido entre mi divisor, si al 180 lo divido entre 2 y me da cero, q tenemos q hacer? agregarlo al arreglo
        if(num % divisor === 0) {
            arregloFactores.push(divisor)
            num = num / divisor //en el primer paso del ejemplo num = 180 / 2,  al numero, le decimos q sea igual al divisor
        }

    // Si el numero no es divisible
    // Debemos aumentar el divisor
        else {
        divisor++
        }
    }
    //vamos a seguir miestras el numero sea mayor a 1.
    //cuando termina el while, debemos devoler el numero de factores
    return arregloFactores;
}


    function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    // Tomar el primer numero y lo comparamos , si el numero q es mayor me quedo con ese.

    // Cuando mi posocion es mas grande de la q tengo adelante, tengo q seguir recorriendo,
    // compara e intercambian el lugar.
    

    //Nosotros vamos a preguntar e identificar si hubo un cambio o no, y vamos a ir repetiendo  el proceso de cambio
    // En una variable vamos a guardar un booleano que nos indiqe si hubo cambio o no,
    // en principio va a empeza en true
    var huboCambio = true;


    //  ¿Cuando tenemos q volver a recorrer?
    // solo cuando hay cambio.
    // MIENTRAS haya un cambio,
    // voy a recorrer comparando y de ser necesario, cambiar posicion.
    while(huboCambio){
    
        //Cuando inicio de vuelta, lo tengo que pasar a falso, porque no hay cambio.
        huboCambio = false
        for (let i = 0; i < array.length; i++) { //primer elemento del array

         // si mi arreglo en la posicion de i, es mas grande que el que sigue.
            if(array[i] > array[i+1]) { //5 > 1

        // Aqui es donde debemos hacer el cambio de burbuja.
        //Guardamos en una variable auxpara no perder el valor,
                let aux = array[i]  //5

                //Ahora va a ser el de la posicion de adelante
                array[i] = array[i+1] //[ 5, 5]
                array[i+1] = aux //1
                huboCambio = true
            }
        }
        
    }
    return array
}


    function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 1; i < array.length; i++) { //comienza i = 3
        var j = i -1 // me va a permitir acceder a la posicion anterior siendo j = 5
        var aux = array[i]//con quien vamos a ir comparando
        while(array[j] > aux) {//Mientras esto suceda lo que va a pasar es que voy a tener que seguir moviendo.
        array[j+1] = array[j]  //3 = 5 ¿Cual va pisando?, el que tiene adelante J y lo pisa con el puntero.
        j-- // j se reinicia
        }
        //sale del while y para no perder la referencia, pisamos el valor con aux
        array[j+1] = aux //inserta i en j
    }
    return array

    }

    //console.log(insertionSort([5, 3, 4, 2, 8]))
    //   [5, 3, 4, 2, 8]
    //       i
    //    j  
    //aux = i
    //¿Porque debemos guardar el valor en un aux, porque son valores que tenemos que modificar y no queremos perderlos
    //j > i cambialo
    //si lo cambiamos, perdemos i
    //j cada vez que reconoce ese cambio, retrocede uno
    //i sigue iterando y j se resetea.

    function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    //Seleccionamos el valor minimo del array
    //necesitamos un for para recorrer el array, de adelante hacia atras buscando al minimo
    //este ciclo for es quien comienza
    for (let i = 0; i < array.length; i++) {
        var minimo = i // posicion del valor minimo en el array
        //necesitamos otro for que va a ir recorriendo, para comparar
        for (let j = i+1; j < array.length; j++) {
        //Si este for se para en alguna posicion que sea menor a la posicion guardada, deberia guardarme un nuevo minimo.
        if(array[j] < array[minimo]){
            minimo = j //siempre apunta al mas chico
        }
        }
        //salgo del segundo for, encontré el valor minimo, j ya recorrió
        //si el minimo, no esta repetido, no es el mismo
        if(minimo !== i) {
        //hacemos el cambio
        let aux = array[i] //necesitamos un aux para no perder el valor
        //modificamos ese elemento con el mas chico
        array[i] = array[minimo]
        //ahora el minimo va a ser el aux, encontró el menor
        array[minimo] = aux
        }
    }
    return array
    }

