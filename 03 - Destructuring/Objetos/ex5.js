const primeiroProduto = {
  nome: 'Sabão em pó OMO',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
    fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg'
  },
  atributos: {
    produtoNovo: false,
    produtoIndicado: true,
    emPromocao: true,
    compre1Leve2: true
  }
};

const segundoProduto = {
  nome: 'Sabão líquido ARIEL',
  fotos: {
    fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
  },
  atributos: {
    produtoNovo: true,
    produtoIndicado: false,
    emPromocao: false,
    compre1Leve2: false
  }
};

// Inicie o destructuring na linha abaixo ->

const 
{fotos: {fotoPrincipal: fotoPrimeiroProduto, fotoSecundaria: fotoSecundariaPrimeiroProduto = 'https://via.placeholder.com/1500'}, atributos: {produtoIndicado: produtoIndicadoPrimeiroProduto, ...atributosAdicionaisPrimeiroProduto}} = primeiroProduto;

const 
{fotos: {fotoPrincipal: fotoSegundoProduto, fotoSecundaria: fotoSecundariaSegundoProduto = 'https://via.placeholder.com/1500'}, atributos: {produtoIndicado: produtoIndicadoSegundoProduto, ...atributosAdicionaisSegundoProduto}} = segundoProduto;

// <- Finalize o destructuring na linha acima

console.log('primeiro produto:');
console.log({fotoPrimeiroProduto});
console.log({fotoSecundariaPrimeiroProduto});
console.log({produtoIndicadoPrimeiroProduto});
console.log({atributosAdicionaisPrimeiroProduto});

console.log(`\n**** \n`)

console.log('segundo produto:');
console.log({fotoSegundoProduto});
console.log({fotoSecundariaSegundoProduto});
console.log({produtoIndicadoSegundoProduto});
console.log({atributosAdicionaisSegundoProduto});