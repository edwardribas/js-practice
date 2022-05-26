const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: [
    'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
  ],
  atributos: [
    'Produto Indicado',
    'Produto Novo',
    'Promoção ativa',
    'Tira-manchas',
    'Rende mais'
  ]
};

// Inicie o destructuring na linha abaixo ->

const [atributoPrincipal, , ...demaisAtributos] = produto.atributos;

// <- Finalize o destructuring na linha acima

console.log({atributoPrincipal});
console.log({demaisAtributos});