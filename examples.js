// Nested for
for (let i: number = 0; i < 3; ++i) for (let j: number = 0; j < 3; ++j)
    console.log(i + ", " + j);


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
  id: 101,
  nombre: 'Antonio',
  email: 'antonio@gmail.com'
};
let { nombre } = usuario;
console.log(nombre);


// Optional chaining / Encadenamiento opcional
usuario?.compañia?.idcompañia
