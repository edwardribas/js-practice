// shift, pop, unshift, push

// shift e pop têm a função de remover elementos
// push e unshift adicionam elementos, portanto requerem parâmetros.

// shift e unshift irão mudar a ordem de todo o array, pois irá mexer na primeira posição
// push e pop irão mexer sempre na última posição do array.

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// O array fica: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Remoção

numbers.shift(); // retorna 0 (elemento removido)
// Com slice: numbers.splice(0, 1)
// O array fica: ['1', '2', '3', '4', '5', '6', '7', '8', '9']

numbers.pop(); // retorna 9 (elemento removido)
// Com splice: numbers.splice(-1, 1)
// O array fica: ['1', '2', '3', '4', '5', '6', '7', '8']

// Adição

numbers.unshift('Primeiro'); // retorna o novo tamanho do array
// Com splice: numbers.splice(0, 0, 'Primeiro')
// O array fica: ['Primeiro', '1', '2', '3', '4', '5', '6', '7', '8']

numbers.push('Último');  // retorna o novo tamanho do array
// Com splice: numbers.splice(numbers.length, 0, 'Último');
// O array fica: ['Primeiro', '1', '2', '3', '4', '5', '6', '7', '8', 'Último']
