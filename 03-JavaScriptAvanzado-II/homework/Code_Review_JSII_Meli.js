// Closures

function counter() {
    //una variable que se encuentra en el contexto de ejecucion de la funcion padre
    var contador = 1

    //Una funcion hija que permite acceder a la variable del contexto de ejecucion que fue destruido, generando un CLOUSURE(clausura)
    return function(){
      //si contador es una variable, que debia hacer? ir aumentando
        return contador++
    }
    /*
    Ejercicio 1

    La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

    Ejemplo:
    const nuevoContador = counter()
    nuevoContador()     // 1 --> nuevoContador, a que hace referencia?? a un funcion
    nuevoContador()     // 2
    nuevoContador()     // 3

    const otroContador = counter()
    otroContador()      // 1
    otroContador()      // 2
    otroContador()      // 3   
     */
}
  //var counterFunction = counter()

  //const nuevoContador = counter()

  function cacheFunction(cb) {  //Un callback hace referencia a una funcion como argumento de otra funcion.

    //PSEUDOCODIGO:
    //la funcion retornada tiene que recibir un parametro/argumento
    //tiene que fijarse si ya tiene ese argumento guardado
    //si ya lo tiene, retornar lo que tiene guardado en memoria
    //si no lo tiene, calcular y guardar.
    

    //tenemos un objeto en donde vamos a guardar ese argumento, debe ir en el contexto de la funcion padre
  //var cache = {argumento: resultado}
    var cache = {} //funciona como nuestra memoria cache
    //var cache = {
    //          5: 10
    //          3:6
    //        }

   //cacheFunction debe retornar otra function
    return function(arg) { //arg recibe 5  arg = 5
      //fijarse si esta guardado, ¿como pregunto si existe esa propiedad dentro del objeto?
        if(cache.hasOwnProperty(arg)){ //   si existe arg = 5 en el obj cache     
        //si entro acá, es porque tenia guardado el valor en la memoria, tenia esa propiedad.
        //preguntamos cuando ejecutemos esta funcion, y le pasamos un argumento, por ejemplo 5, queremos saber si en algun momento ya ejecutamos esa funcion, pasandole 5
        //si ya tengo ese valor quiero que me retorne ese valor
        return cache[arg] //¿Porque []? porque estoy accediendo a la propiedad del objeto cache, bracket notation, me representa una variable dentro del objeto cache
        //si usamos el punto, hace la busqueda en una propiedad llamada argumento, por el nombre de la propiedad y no su valor ejemplo: var cache = {"argumento": }
        }
        else {//si no esta ese valor, calcular y retornar ese resultado
            var resultado = cb(arg)   // estamos declarando una variable resultado , cb: Es el que recibe por parametro. cb = es la fn que le pase a la fn cacheFunction   como en el ejemplo resultado = square(5) 5 es arg
            //resultado = 25 (porque hace 5 * 2)
        
            cache[arg] = resultado   // al obj cache, la propiedad arg, es igual a resultado, arg es 6, el objeto cache, tiene una propiedad 6? (todavia no), si no tiene con bracket notation guardamos el resultado[]
            //el resultado es 12, calcule y retorne el valor
            return resultado
        }
    }


    /*
    Ejercicio 2

    Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

    cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


    Ejemplo:
    function square(n){
      return n * n
    }

    const squareCache = cacheFunction(square)

    squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
    squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

    */
}

  // Bind

var instructor = {
    nombre: "Franco",
    edad: 25,
};

var alumno = {
    nombre: "Juan",
    curso: "FullStack",
};

function getNombre() { //una funcion que se declaraba en el aire, en el contexto global, ¿a quien apunta el this?
    return this.nombre;
}

/*
    Ejercicio 3

    IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

    Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
  */

  //¿Que particularidad tenia el bind? Genera una copia.
let getNombreInstructor = getNombre.bind(instructor)//primer argumento a quien queremos que apunte
let getNombreAlumno = getNombre.bind(alumno)

/*
    Ejercicio 4
    
    Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
  */

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos= crearCadena.bind(this, "*", "*")
let textoGuiones= crearCadena.bind(this, "-", "-")
let textoUnderscore= crearCadena.bind(this, "_", "_")
