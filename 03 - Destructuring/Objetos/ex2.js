const produto = {
  id: 2000,
  nome: 'Sabão em pó',
  preco: 12.29,
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    // fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
    // fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
  }
};

// Inicie o destructuring na linha abaixo ->

const {fotos: {fotoPrincipal, fotoSecundaria = 'https://via.placeholder.com/1500', fotoVerso = 'https://via.placeholder.com/1500'}} = produto;

// <- Finalize o destructuring na linha acima

console.log(fotoPrincipal);
console.log(fotoSecundaria);
console.log(fotoVerso);