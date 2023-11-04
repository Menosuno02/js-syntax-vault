# JS Syntax Vault
Cositis de azúcar sintáctico y otros tipos de simplificación de sintaxis en JavaScript y TypeScript (jeje goz)


## Tabla
 - [Nested for](#nested-for)
 - [for..of, for..in](#forof-forin)
 - [Arrow functions](#arrow-functions)
 - [Operador spread](#operador-spread)
 - [Operador ternario](#operador-ternario)
 - [Operador de coalescencia nula](#operador-de-coalescencia-nula)
 - [Interpolación de strings](#interpolación)
 - [Desestructuración](#desestructuración)
 - [Encadenamiento opcional](#encadenamiento-opcional)
 - [Operador pipe](#operador-pipe)


## Nested for
Funciona como dos bucles for anidados, pero eliminado las llaves y reduciendo la identación. En teoría esto debería funcionar en cualquier lenguaje que permita usar estrucutas de control sin llaves (siempre que su lógica ocupe menos de una línea), pero no lo he probado jeje
```typescript
for (let i: number = 0; i < 3; ++i) for (let j: number = 0; j < 3; ++j)
    console.log(i + ", " + j);
```


## for..of, for..in
Ambas declaraciones funcionan de forma similar a un for. Mientras que for..of itera sobre las propiedades/elementos de un objeto, array, string, etc., for..in lo hace sobre las propiedades enumerables del objeto (como pueden ser los índices de los valores, las claves de sus pares key/value o el nombre de sus funciones)
```typescript
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};
const array = [3, 5, 7];
array.foo = "bar";

for (let i in array) console.log(i); // "0", "1", "2", "foo", "arrCustom", "objCustom"

for (let i in array)
  if (Object.hasOwn(array, i)) console.log(i); // "0" "1" "2" "foo"

for (let i of array) console.log(i); // 3 5 7
```


## Arrow functions
La sintaxis de las funciones arrow o flecha nos permite escribir funciones de una forma alternativa, eliminando la palabra function, dejando los parámetros y añadiendo =>. Se pueden usar tanto en nuevas funciones como dentro de funciones anónimas (como pueden ser map, filter, reduce...)
```typescript
let array: number[] = [1, 2, 3, 4, 5];
let doble = array.map((num: number) => num * 2);
let numero: number = 2;
const doble = (num: number) => {
  return num * 2;
}
console.log(doble(numero));
```


## Operador spread
Permite crear una copia de un array/objeto e iterar sobre sus elementos/propiedades mediante la sintaxis de parámetros rest (...). Con esto podemos tanto mostrar un array/objeto entero con solo una línea como combinar varios de ellos
```typescript
let arr: number[] = [1, 2, 3, 4, 5];
console.log([...arr]);
console.log([...arr, ...arr]);
console.log([1, ...arr, 4, ...arr]);
```


## Operador ternario
El operador ternario o condicional no se considera azúcar sintáctico del if...else (pero lo pongo igual para acordarme xd), debido a que funciona como una expresión (ya hace un return, por lo que no puede tener un return dentro), mientras que un if...else es una declaración
```typescript
condicion == true ? console.log("Verdadero") : console.log("Falso");
```


## Operador de coalescencia nula
Este operador lógico nos permite asignarle un valor a una variable en el caso de que su valor sea null o undefined
```typescript
let usuario = null;
let newUsuario = usuario ?? "usu";
console.log(newUsuario); // "usu"
```


## Interpolación
Para combinar en JS vanilla nuestras variables con cadenas de texto, solemos recurrir a la concatenación. Sin embargo, como en otros lenguajes tenemos la interpolación, la cual tiene varias ventajas respecto a la concatenación como son una mejor legibilidad o poder usar múltiples líneas y expresiones
```typescript
let prueba: string = "prueba";
console.log(`Así se interpola en JS -> ${prueba}`);
console.log(`eyyyy
espectacular`);
```


## Desestructuración
Con la desestructuración podemos guardar los valores de un array o las propiedades de un objeto en variables mediante la sintaxis de parámetros rest (...)
```typescript
let array = [1, 2, 3, 4, 5];
let [primero, segundo, ...resto] = array;
console.log(primero, segundo, resto); // 1 2 [3, 4, 5]

let usuario = {
  nombre: 'Antonio',
  email: 'antonio@gmail.com'
};
let { nombre } = usuario;
console.log(nombre);
```


## Encadenamiento opcional
Si llamamos a las propiedades de un objeto con ?. en vez de con solo el punto, comprobará si alguna de las propiedades es null o undefined y si lo es, retornará undefined en vez de lanzar una excepción
```typescript
usuario?.compañia?.idcompañia
```


## Operador pipe
ECMAScript 2023 traerá soporte para el operador pipe (|>), que permitirá encadenar funciones, de forma que el resultado de una función se pasará como primer argumento a la siguiente en la cadena
```typescript
const doble = (x: number) => x * 2;
const suma = (x: number, y: number) => x + y;
let resultado = 5 |> doble |> suma(10); // suma(doble(5), 10)
```
