const primeiroProduto = {
  nome: 'Sabão em pó OMO',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
  }
};

const segundoProduto = {
  nome: 'Sabão líquido ARIEL',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
  }
};

// Inicie o destructuring na linha abaixo ->

const {fotos: {fotoPrincipal: fotoDoPrimeiroProduto}} = primeiroProduto;
const {fotos: {fotoPrincipal: fotoDoSegundoProduto}} = segundoProduto;

// <- Finalize o destructuring na linha acima

console.log({fotoDoPrimeiroProduto});
console.log({fotoDoSegundoProduto});