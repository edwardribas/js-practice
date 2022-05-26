const produtos = [
  {
    nome: 'Sabão em pó OMO',
    preco: 12.29
  },
  {
    nome: 'Sabão líquido ARIEL',
    preco: 14.50
  },
  {
    nome: 'Sabão ACE',
    preco: 13.27
  }
];

// Inicie o destructuring na linha abaixo ->

const [{nome: nomePrimeiroProduto, preco: precoPrimeiroProduto}, {nome: nomeSegundoProduto, preco: precoSegundoProduto}] = produtos;

// <- Finalize o destructuring na linha acima

console.log(nomePrimeiroProduto);
console.log(precoPrimeiroProduto);

console.log(nomeSegundoProduto);
console.log(precoSegundoProduto);