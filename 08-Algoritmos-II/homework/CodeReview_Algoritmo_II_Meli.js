    function quickSort(array) {
        // Implementar el método conocido como quickSort para ordenar de menor a mayor
        // el array recibido como parámetro
        // Devolver el array ordenado resultante
        // Tu código:
    
        //debemos seleccionar un pivote (un elemento del array)
        //¿Importa la posicion del pivote??
    
        //¿Cual seria nuestra condicion de corte?
        //cuando tiene uno sólo no puede dividir más.
    
        if(array.length  <=1 ) return array
    
        //Necesitamos un pivot, un array para ubicar a los nros menores a la izq, y un array para los mayores a la derecha.
        var pivot = array[0]; // //con el que vamos a comparar        array[Math.floor(Math.random() * array.length)] [devuelve un nro, seria la posicion] tendrian que evaluar if(array[i] !== pivot)--> else {equal.push(array[i])}
        //defino izq y der
        var left = []
        var right = []
    
    
        for (let i = 1; i < array.length; i++) { //¿Porque comienza en 1? En la posicion 0 va a estar el pivot
        //hacer comparaciones
        if(array[i] < pivot) {  // 1 < 5 --> true
            left.push(array[i]) //entra acá y su valor, ese 1 lo pusheamos a la izq porque es un valor menor al pivote
        }
        else {
            right.push(array[i]) //si el valor en mayor entra acá
        }
        }
        //Hasta acá dividimos el array, menor left, mayores right, termino el for
        //llega el momento de la recursión, volvemos a seleccionar el pivot, comparamos los valores, hasta que llegue el caso base de que el array tenga 1 solo elemento
        return quickSort(left).concat(pivot).concat(quickSort(right))   //contatenar izq -- piv --derecha
    //return quickSort([1, 4, 2]).concat(5).concat(quickSort(8))
    //return quickSort(1,2, 4).concat(5).concat(quickSort(8))
    //return [1,2, 4,5, 8]
    // quickSort([1, 4, 2]) ---> pivote = 1
    //                           left = []
    //                           right = [4, 2]
    //return quickSort([]).concat(1).concat(quickSort([4, 2]))
    //                    concat(quickSort([4, 2])) --> pivote = 4
    //                                                  left = [2]
    //                                                  right = []
    //return quickSort([2]).concat(4).concat(quickSort([]))
    
    }
    
    // [5, 1, 4, 2, 8]
    //  p
    //     i
    
    
    //left= [1, 4, 2]      pivot =[5]              right = [8]
    
    
    
    
    
    
    
    function mergeSort(array) {
        // Implementar el método conocido como mergeSort para ordenar de menor a mayor
        // el array recibido como parámetro
        // Devolver el array ordenado resultante
        // Tu código:
    //¿Qué hacia merge? 
        //condicion de corte -- > un solo elemento  
        if(array.length <= 1) return array;
    
        //1- Necesitamos dividir en 2 el array
        var middle = Math.floor(array.length /2);
        var left = array.slice(0, middle);    //metodo slice para recortar el arreglo. Desde el inicio, hasta donde?
        var right= array.slice(middle); //lo que queda
    
        //Se podria hacer sin otra funcion
        var array = []
    //Antes de comparar necesitamos hacer la recursion, seguimos dividiendo
        left = mergeSort(left)
        right = mergeSort(right)
        
        while(left.length && right.length) { //mientras tenga elemento en los dos array 
        if(left[0] < right[0]) {
            array.push(left.shift())  // pusheame a este array lo que saques de left
        }
        else{
            array.push(right.shift())
        }
        }
        array = array.concat(left,right)
        return array;
    
    
    //CON FUNCION EXTRA:
        //return merge(mergeSort(left), mergeSort(right)); //Hacemos recursion
    
    }
    //Hacemos una funcion extra para comparar arr izq con arr derecha
    //[9, 13, 15]      [35, 78]
    // i
    //                  j
    
    // function merge(left, right){
    //   var result = [];
    //   var i = 0;
    //   var j = 0;
    
    //   while (i < left.length && j < right.length) {
    //       if(left[i] < right[j]) {
    //         result.push(left[i]);
    //         i++
    //       }
    //       else {
    //         result.push(right[j])
    //         j++
    //       }
    //   }
    //   return result.concat(left.slice(i).concat(right.slice(j))); //left.slice(i) devuelve un array vacio.
    // }
    
    //Si retornamos result nos va a devolver left, corta el while y deja right por fuera
    //utilizamos slice para concatenar lo que dejo left, con lo que hay en right
    
    //slice, hace una copia, no modifica la original.
    // var right = arr.slice(2)
    //arr 2
    //arr
    
    
    //splice es destructivo
    
    
    