
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {//8,9,10
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) { //8,9,10
    b = a;//8
    console.log(b);//8
    b = c;//10
    var x = 5;
  }
  f(a,b,c);//8,10,10
  console.log(b);//10
}
c(8,9,10);
console.log(b);//10
console.log(x);//1
```

```javascript
console.log(bar);//undifined?
console.log(baz);//undefined?
foo();//Undefined aun jaja
function foo() { console.log('Hola!'); }//ya pa que? ya llamaron a la funcion pero no estaba declarada :(
var bar = 1;//yapaquex2
baz = 2;//yapaquex3, si esto fuera un bucle al menos serviria
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony porque la variable instructor vuelve a valer lo que valia antes de la funcion anterior
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //the flash
    console.log(pm);  //reverse flash
}
console.log(instructor); // the flash
console.log(pm); //franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2
"2" * "3"//"6"
4 + 5 + "px"//"9px"
"$" + 4 + 5//"$45"
"4" - 2//"2"
"4px" - 2 //NaN
7 / 0//jajjaja yo jodo
     // a medio mundo con esta pregunta
     //obvio da error, pero su respuesta
     // tiende a ser infinita
{}[0]//[0]
parseInt("09")//9
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//33-10 = 23
3>2>1// 3>2 = True  ; True>1 = False ; False
[] == ![] // ![] = False ; "" = False ; False = False; True
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefined
   console.log(foo());//2
   //Las variables y funciones son declaradas, pero no se les asigna valor aun, la funcion tiene el return 2, por eso retorna 2
   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
//undefined en todo, no entra al IF, y Snack no ha sido declarado dentro de la funcion
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//aurelio de rosa

var test = obj.prop.getFullname;

console.log(test());//undefined o juan perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
//1432
printing();
```
