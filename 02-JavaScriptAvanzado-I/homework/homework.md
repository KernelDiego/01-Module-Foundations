
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // 1
var a = 5; // 5
var b = 10; //10
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 5
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 5
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //10
}
c(8,9,10);
console.log(b); //9
console.log(x); //5
```

```javascript
console.log(bar); //undefined
console.log(baz); //2
foo();
function foo() { console.log('Hola!'); } //'Hola!'
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //"Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //"Franco"
   }
})();
console.log(instructor);//"Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//"" 
    console.log(pm);
}
console.log(instructor);//"Thr Flash"
console.log(pm);//"Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //6
"2" * "3" //6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 //2
"4px" - 2// nan
7 / 0 // Infinity
{}[0]// undefined
parseInt("09")//9
5 && 2 // 9
2 && 5 //2
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23
3>2>1
[] == ![]// true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);// undefined
   console.log(foo()); //2

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

getFood(false); //undefined
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

console.log(obj.prop.getFullname());// 'Aurelia De Rosa'

var test = obj.prop.getFullname;

console.log(test());//"Juan Perez"
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);// se ejecuta 1ro por que no tiene timeOut
   setTimeout(function() { console.log(2); }, 1000);// se ejecuta 4to por que tarda 1 segundo
   setTimeout(function() { console.log(3); }, 0); //se ejecuta 3ro por que tiene un timeOut 0
   console.log(4);//se ejecuta 2do por que tampoco tiene timeOut
}

printing();
```
