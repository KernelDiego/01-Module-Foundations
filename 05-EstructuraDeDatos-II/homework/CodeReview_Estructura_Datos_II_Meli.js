"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
- add: agrega un nuevo nodo al final de la lista;
- remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
- search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
Ejemplo: 
search(3) busca un nodo cuyo valor sea 3;
search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
    //propiedades de las listas
    this.head = null
    this._length = 0 //convención de variables privadas
}

function Node(value) {
    //propiedades de los nodos
    this.value = value
    this.next = null
}

LinkedList.prototype.add = function(data) {
    //Si necesito hacer algo con una info, la guardo en una variable
    //En principio, ¿Que vamos a guardar en una variable, cuando me pasan la data?
    //Una nueva instancia de Node
    let nodo = new Node(data) //{value:data, next:null}

    //Si head no existe, es una lista vacia
    if(!this.head) { //Si no hay nada, el nodo se agrega en head
        this.head = nodo
        //this._length++
    }
    else { //Si existe
        let current = this.head 
        while(current.next){ //mientras exista next seguimos avanzando
            current = current.next
        }
        //cuando el while termina sigo acá
            current.next = nodo //nuestro nodo apunta al nuevo nodo, se modifica porque es un valor por referencia, se modifica todo el objeto.
    }
}

//Probar:
// var lista= new LinkedList()
// console.log(lista)
// lista.add('Henry')
// console.log(lista)
// lista.add('pepe')
// console.log(lista)

LinkedList.prototype.remove = function (){
    //Indentifcar el nodo a eliminar
    //¿Cómo identificamos si dos más adelante es nulo?
    //[] --> []-->[] --> []-->[] --> null
    //                   c.next.next deja de apuntar a su next y apunta al siguiente

    //ver si hay algo en el head o si solo tiene 1 nodo
    //recorrerlo hasta llegar al penultimo nodo
    //a este nodo le digo que apunte a null asi pierdo la referencia que tenia antes.
    if(!this.head) return null;

    //si el head.next.next es nulo, tiene un solo nodo
    if(this.head.next === null){
        //primero debemos guardar lo que habia en esa posicion para no perder el valor
        let aux = this.head
        this.head = null
        return aux.value //aux es un objeto que tiene propiedad value, y next
    }
    else{//Si entra aqui, tiene más de dos nodos.
        let current = this.head
        while(current.next.next !== null){//vamos a recorrer miestras sea diferente de null, mientras haya nodos.
        current = current.next //avanza una posicion
        //Cuando termina el while significa que llegue a la posicion que necesito 
        //primero tengo que guardar esa info antes de borrarlo.
        }
        let aux = current.next.value // Si estoy parado en current.next.value
        //Ahora que lo tengo guardado, le digo a mi next que apunte a null
        current.next = null
        //this._length--
        return aux //Ahora que lo eliminamos, retornamos el valor
    }
    }

    // console.log(lista)
    // lista.remove('pepe')
    // console.log(lista)

LinkedList.prototype.search = function(value){
    if(!this.head) return null 
    var current = this.head
    while(current !== null){ //va a pararse en cada uno de los nodos y va a preguntar por el value
        //mientras sea difenente de null va a entrar al while
        if(typeof value  === "function") { //Si el tipo de value es una funcion
            if(value(current.value)) { //si value es una funcion y recibe por parametro (current.value) devuelve true es porque lo encontro
                return current.value
            }
        }
        if(current.value === value) return current.value
        else { //si no lo encuentro
        current = current.next
        }
    }
    return null
}
// lista.search('Henry')
// console.log(lista)

/*
    Implementar la clase HashTable.

    Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
    Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

    La clase debe tener los siguientes métodos:
    - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
    - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
    - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
    - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

    Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
    */

function HashTable() {
    this.numBuckets = 35 
    this.buckets = [] //casilleros, donde vamos a guardar los valores
}


HashTable.prototype.set = function(key, value) {
    var index = this.hash(key) //llamado de la funcion hash
    //si el tipo de key no es un string debe devolver un error
    if(typeof key !== "string") throw new TypeError('Keys must be strings')
    
    //¿donde voy a guardar esa info respecto a los buckets?
    if(!this.buckets[index]) {//si yo tengo 2 key que van al mismo buckets / Me paro en la posicion index de mi array, si es null no hay colisiones
        //seteamos/creamos un objeto para que guarde colisiones
        //Si no hay nada, definimos un objeto, para evitar colisiones
        this.buckets[index] = {}
    }
    this.buckets[index][key] = value //en ese index que hay un objeto, defini una propiedad key, de mi objeto, que va a tener un value
    //Ejemplo: var arr =[{"foo": "bar1", "ofo": "bar2"}]
    //var key = "ofo"
    //¿Cómo accedemos desde el array al objeto?
    //var index = 0
    //arr[index]
    //si colocamos .key ¿Qué pasa?  arr[index].key
    //esta buscando dentro del objeto una propiedad que textualemnte se llame key
    //si hacemos arr[index][key] con bracket notation accedemos a la propiedad
}

HashTable.prototype.get = function(key){
    var index = this.hash(key) //llamado de la funcion hash
    return this.buckets[index][key] //vamos a la posicion del array y preguntamos por la key que llega por parametro
}

HashTable.prototype.hasKey = function(key){
    var index = this.hash(key)//llamado de la funcion hash
    return this.buckets[index].hasOwnProperty(key) //si en el index esta esa propiedad
}

HashTable.prototype.hash = function(key){ //funcion hasheadora
    var total = 0
    for(let i = 0; i <key.length; i++){ //observa en consola como funciona el metodo "hola".chardCodeAt() si le pasamos el indice (1)
        total= total + key.charCodeAt(i) //se va a parar en el indice de cada caracter y lo vamos sumando.
    }
    return total % this.numBuckets //me devuelve el indice o posicion dentro de la tabla
}


    // No modifiquen nada debajo de esta linea
    // --------------------------------

    module.exports = {
    Node,
    LinkedList,
    HashTable,
    };
