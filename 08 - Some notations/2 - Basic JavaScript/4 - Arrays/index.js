// Arrays
// Uma lista - Uma coleção de dados
// Permite indexar os elementos

// Normalmente se coloca somente um tipo de dado, apesar do JavaScript não restringir.

// Arrays são um tipo de dado no JavaScript na qual você pode indexar/listar os elementos que são adicionados.
// Ou seja, você pode armazenar uma ou mais strings, por exemplo.

const alunos = [
    'Luiz',
    'Maria',
    'João'
];

console.log();

// alunos.push('Roberto');
// alunos.push('Joana');
// // fatiar com slice - ele não inclui o ultimo elemento
// // ou seja - se eu quiser do 0 até o 2, preciso incluir o 3.
// console.log(alunos.slice(0, 2));

// // remove os ultimos 2
// console.log(alunos.slice(0, -2));

// console.log(alunos[50]);

// Deletar elemento
// delete alunos[1];
// console.log(alunos);
// console.log(alunos[1]);

// alunos[3] = 'Luíza'; // criar um novo elemento
// ou
// alunos[alunos.length] = "Otávio";
// alunos[alunos.length] = "José";
// alunos[alunos.length] = "Andrew";
// ou
// alunos.push('Roberto')

// shift, unshift, pop, push
// alunos.unshift('Alencar');
// console.log(alunos);

// pop = estouro, remover = remove do último elemennto e retorna o elemento removido;
// shift = remove o primeiro elemento

// let removido = alunos.pop();
// let removido2 = alunos.shift();
// console.log(removido);
// console.log(removido2);
// console.log(alunos);

// console.log(alunos[1]); // retorna o elemento 0

// const nome = 'Eduardo';
// console.log(nome[0]); // retorna a letra do índice 0