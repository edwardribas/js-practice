// Valores primitivos sao imutáveis - seu tipo é imutável
// string, number, boolean, undefined, null (bigint, symbol)

// let a = 'A';
// let b = a; // cópia
// console.log({a,b})

// a = 'Outra coisa'
// console.log({a,b})

// Referência
// arrays, objetos e functions

let a = [1, 2, 3]
let b = [...a]; // referencia ao objeto a

console.log({a, b});

a.push(4)

console.log({a, b});

b.pop()
console.log({a, b});