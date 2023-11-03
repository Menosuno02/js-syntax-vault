# JS Syntax Vault
Cositis de azúcar sintáctico y otros tipos de simplificación de sintaxis en JavaScript y TypeScript

## Le tabla
 - [Nested for](#nested-for)
 - [Operador spread](#operador-spread)
 - [Operador ternario](#operador-ternario)
 - [Interpolación de strings](#interpolación)
 - [Desestructuración](#desestructuración)

## Nested for
Funciona como dos bucles for anidados, pero eliminado las llaves y reduciendo la identación. En teoría esto debería funcionar en cualquier lenguaje que permita usar estrucutas de control sin llaves (siempre que su lógica ocupe menos de una línea), pero no lo he probado jeje
```typescript
for (let i: number = 0; i < 3; ++i) for (let j: number = 0; j < 3; ++j)
    console.log(i + ", " + j);
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
  id: 101,
  nombre: 'Antonio',
  email: 'antonio@gmail.com'
};
let { nombre } = usuario;
console.log(nombre);
```
