const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
  },
  atributos: {
    produtoNovo: false,
    produtoIndicado: true,
    emPromocao: true,
    compre1Leve2: true
  }
};

// Inicie o destructuring na linha abaixo ->

const {produtoIndicado, ...atributosAdicionais} = produto.atributos;

// <- Finalize o destructuring na linha acima

console.log({produtoIndicado});
console.log({atributosAdicionais});