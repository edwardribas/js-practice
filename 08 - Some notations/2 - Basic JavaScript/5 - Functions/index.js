// // constructor
// function saudacao(nome){
//     return `Bom dia, ${nome}.`;
// }

// const variavel = saudacao('Eduardo');
// // console.log(typeof variavel);

// // soma
// function soma(x, y){
//     let resultado = x + y;

//     // depois do return, nada mais é executado
//     // com exceção de um if-else
//     return resultado;
// }

// console.log(soma(2,2));

//anonimo
const raiz = function (n){
    return n ** 0.5;
}

console.log(raiz(9));

// arrow functions
// nao precisa do return
const soma = (x,y) => x+y;
console.log(soma(2,2));