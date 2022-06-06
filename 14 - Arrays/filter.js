// Filter - filtra o array e não modifica o original (cria um novo array)
console.clear();
const numbers = [5, 10, 50, 4, 7, 60, 20, 22, 40, 1];

// retornar os números maiores que 10
const filteredNumbers = numbers.filter(value => value > 10);
console.log(filteredNumbers, `(${filteredNumbers.length})`);

// retornar:
// pessoas com nome de 5 letras ou mais
// mais de 50 anos
// nome termina com a
const people = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 73 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const filteredPeople = people.filter(obj => {
    let userAge = obj.idade;
    let nameLength = obj.nome.length; 

    if (userAge > 50 && nameLength >= 5 && obj.nome.endsWith('a'))
        return obj.nome;
})

console.log(filteredPeople)