// Reduce - reduzir um array a um único valor com alguns critérios

const numbers = [3, 10, 60, 50, 24, 2, 1, 9, 59];

// o primeiro argumento é o acumulador
const reducedNumbers = numbers.reduce((acc, value) => {

    if (value % 2 === 0) acc.push(value);
    return acc.sort((a, b) => a-b);

}, []) // valor inicial pro acumulador (opcional) 
// - se omitido, o primeiro valor será o acc.

// Retornar a pessoa mais velha
const people = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Abreu', idade: 54},
    { nome: 'Rogério', idade: 56},
    { nome: 'José', idade: 64},
    { nome: 'Alberto', idade: 52}
];

const olderPerson = people.reduce((acc, obj) => {
    if (acc.idade > obj.idade) return acc;
    return obj;
})

console.log(olderPerson)

