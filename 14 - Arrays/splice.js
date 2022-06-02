// Splice - pode substituir shift, unshift, pop e push.
// Ele pode tanto remover como adicionar elementos
// O método altera o array original e retorna um novo array


const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Remoção
const removidos = nomes.splice(3, 2)

console.log(nomes) // ['Maria', 'João', 'Eduardo']
console.log(removidos) // ['Gabriel', 'Júlia']
console.log(" ")

// Adição
nomes.splice(2, 0, 'Lucas');
// adiciona o elemento no índice especificado e move o anterior para frente
// neste caso, Eduardo ocupa o índice 2, porém passou a ocupar o 3.

console.log(nomes) // ['Maria', 'João', 'Lucas', 'Eduardo']
// se você quisesse substituir 'Eduardo', você mudaria o deleteCount para 1.