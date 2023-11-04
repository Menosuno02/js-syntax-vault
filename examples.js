// Nested for
for (let i: number = 0; i < 3; ++i) for (let j: number = 0; j < 3; ++j)
    console.log(i + ", " + j);


// for..of, for..in
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};
const array = [3, 5, 7];
array.foo = "bar";

for (let i in array) console.log(i); // "0", "1", "2", "foo", "arrCustom", "objCustom"

for (let i in array)
  if (Object.hasOwn(array, i)) console.log(i); // "0" "1" "2" "foo"

for (let i of array) console.log(i); // 3 5 7


// Arrow functions
let array: number[] = [1, 2, 3, 4, 5];
let doble = array.map((num: number) => num * 2);
let numero: number = 2;
const doble = (num: number) => {
  return num * 2;
}
console.log(doble(numero));


// Spread
let arr: number[] = [1, 2, 3, 4, 5];
console.log([...arr]);
console.log([...arr, ...arr]);
console.log([1, ...arr, 4, ...arr]);


// Ternary / ternario
condicion == true ? console.log("Verdadero") : console.log("Falso");


// Nullish coalescing / coalescencia nula
let usuario = null;
let newUsuario = usuario ?? "usu";
console.log(newUsuario);   // "usu"


// Template literals / Interpolación
let prueba: string = "prueba";
console.log(`Así se interpola en JS -> ${prueba}`);
console.log(`eyyyy
espectacular`);


// Desestructuración
let array = [1, 2, 3, 4, 5];
let [primero, segundo, ...resto] = array;
console.log(primero, segundo, resto);   // 1 2 [3, 4, 5]

let usuario = {
  nombre: 'Antonio',
  email: 'antonio@gmail.com'
};
let { nombre } = usuario;
console.log(nombre);


// Optional chaining / Encadenamiento opcional
usuario?.compañia?.idcompañia


// Operador pipe
const doble = (x: number) => x * 2;
const suma = (x: number, y: number) => x + y;
let resultado = 5 |> doble |> suma(10); // suma(doble(5), 10)
