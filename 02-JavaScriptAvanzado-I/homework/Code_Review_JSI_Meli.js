//Asignar un valor a una variable no declarada implica crearla como variable global.
//La diferencia es que las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables NO declaradas siempre son globales.

// Se recomienda siempre declarar las variables, sin importar si están en una función o un ámbito global. Y en el modo estricto (strict mode) de ECMAScript 5, asignar valor a una variable sin declarar lanzará un error.


x = 1; //lo asigna global
var a = 5;
var b = 10;
var c = function(a, b, c) { //El pasaje acá es por referencia o por valor?? por valor, porque es primitivo. hacemos una copia
    //Es lo mismo que tener
    //a = 8
    //b = 9
    //c= 10
    var x = 10;
    console.log(x); //10 va a ir a buscar en su contexto, lo mas cercano que tiene
    console.log(a); //8 
    var f = function(a, b, c) { //declara una funcion y la ejecuta en la linea 24
        b = a; //valia 9 y lo pisa con a -->  b = 8
        console.log(b); //8
        b = c; //10 lo pisa nuevamente
        var x = 5;
        //Lo que hay aca dentro es una copia
    }
    f(a,b,c); //8 9 10 en su lexical enviroment
    console.log(b); //cuando llega acá? b se modifica? 9 porque esta fuera de la funcion. cuando es por valor hace una copia
}
c(8,9,10);
console.log(b); //que lexical enviroment esta buscando?? Aqui vale 10 en su contexto global
console.log(x); //1 contexto global

//-------------------------------------------------
//Hoisting
//¿Que pasaba con las variables?
//usaba solo la definicion, no su valor
//va a subir 
//var bar
//funcion foo(){}
console.log(bar);//undefined
console.log(baz);//no esta definido
foo(); //¿Que pasaba con las funciones ?
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

//----------------------------------------
//let vive entre llaves, entre un bloque de código.
var instructor = "Tony";
if(true) { //el if es un statement
    var instructor = "Franco";
}
console.log(instructor); //Franco, la pisa

//----------------------------------------------



var instructor = "Tony";
console.log(instructor); //Tony
(function() {
    if(true) {
        var instructor = "Franco";
        console.log(instructor); //Franco, lo va a ir a buscar a su scope mas cercano
    }
})(); //IIFE = INMEDIAT INVOC FUNCTION , FUNCION INMEDIATAMENTE INVOCADA, la define y la ejecuta en el momento
console.log(instructor); //Tony va a buscar el valor en su contexto global



//-------------------------------
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; //pisa Tony?? si
    let pm = "Reverse Flash"; //va a pisar a franco??? vive aca dentro
    console.log(instructor); //the flash
    console.log(pm);//Reverse Flash
}
console.log(instructor); //the flash   habia pisado el valor
console.log(pm);//Franco  No se pisa, busca en el contexto global



//----------------------------------
//Coerción de datos
6 / "3"  //se puede dividir un string?? va a dar 2

"2" * "3" //puede multiplicar string? Los convierte en numero, los parsea. Nos da 6

4 + 5 + "px" // Se acuerdan de la asociatividad?? Si son todos simbolos iguales, la precedencia es la misma, va a definir la asosiatividad, y va a empezar a resolver de izquierdaa derecha   4+ 5= '9px', concatena

"$" + 4 + 5  //'$45'  aca lo mismo

"4" - 2 //existe el operador resta para el string?? lo parsea a number osea 2

"4px" - 2 //NaN mostrar en el navegador Number('4px')

7 / 0// si dividimos un numero por 0 ? Infinity, en este caso 7 /0.000001 a si es como lo interpreta JS como 0.00001
//una representacion que interpreta JS como el numero más grande, se utiliza para realizar comparaciones

{}[0]// {} es un bloque de codigo vacio, como no poner nada, entonces crea un array [0] 

parseInt("09") //9 parsea

5 && 2 // un operador and, tengo 5? si, entonces me devuelve el ultimo 2, se queda con el ultimo

2 && 5 //2 esta ok, te devuelvo el ultimo 5

5 || 0 // 5 Ejemplo si hay clases, damos por acentado que hay Q&A , si hay clases,ya no me fijo Q&A, toma el primero, no verifica mas, no hace comparaciones "inecesarias", hace la menor comparacion posible

0 || 5 // 5 toma el cero como false

[3]+[3]-[10] // [3]+[3]= '33' los pasa a string y los concatena, puedo restarlo? NO existe el operador resta para string, lo pasa a number y queda '33'-10 =  23

3>2>1 //Primero compara 3>2, da true. Luego hace true > 1  da false, true que vale? 1 > 1 son iguales, da false 

[] == ![] //conversiones raras, para poder comparar, niega el array, es false, 
//[]== false   array == false no lo puede comparar. 
//'' == false  lo pasa a '' == false.
//false == false
//true   Es como q hace false == false y nos da true




//--------------------------------------------------
//HOISTING

function test() {
    //var a; hace hoisnting y sube la declaracion, no su valor, por eso da undefined
    console.log(a); //existe a?? dentro de las funciones tambien hay hoisting nos da undefined
    console.log(foo()); //2 cuando hace hoisting, la sube

    var a = 1;
    function foo() {
        return 2;
    }
}

test();


//----------------------------------------------
//Se genera hosinting, el if es un statement, tengo un snack dentro de la lista
//da undefined,
var snack = 'Meow Mix';

function getFood(food) { //no entra al if, porque por parametro recibe false
    //sube var snack
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; //va a salir a buscarlo? 
}

getFood(false);


//--------------------------------------
var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea', //una propiedad
    prop: { //otra propiedad que es otro objeto, que tiene una propìedad y un metodo de funcion
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname; //este this a que hace referencia? apunta al metodo donde fue creado
            //es lo mismo que diga prop.fullname
        }
    }
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa

var test = obj.prop.getFullname; //Es lo mismo que test= function(){
   // return this.fullname  Apunta al objeto global
//}

console.log(test());

//--------------------------------------
//Asincronico

//Cual va a ser el proceso que se va a encargar de hacer ese proceso? web api
//Una vez que termina el trabajo web api, a donde lo lleva?? a la callback queue

//execution context
//console.log(1)
//console.log(4)
//console.log(3)
//console.log(2)


//web api
//console.log(3)
//console.log(2)  Una vez que resuelve lo manda a la callback queue


function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
} 

printing();