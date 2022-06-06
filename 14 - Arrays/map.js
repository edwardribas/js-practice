// Map, semelhantemente ao filter, usa callback function e cria um novo array 
// Ele irá retornar os valores modificados.
// Trabalha, a princípio, com valores por referência.


console.clear();

// Arrays
const numbers = [5, 10, 50, 4, 7, 60, 20, 22, 40, 1];

const numbersDoubled = numbers.map(e => e * 2);
console.log(numbersDoubled);

// Objects

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto

const people = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 73 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];


// 1
const peopleName = people.map(obj => obj.nome);
console.log(peopleName);

// 2
const peopleNoName = people.map(obj => ({idade: obj.idade}));
console.log(peopleNoName);

// 3
// obj está sendo referenciado aos objetos do array original
const peopleWithId = people.map((obj, index) => {
    obj = {...obj}; 
    // não usa mais valores por referência, não refletindo mais no objeto original.
    obj.id = index + 1;
    return obj;
});

console.log(peopleWithId);

console.log(" ")
console.log(people)
