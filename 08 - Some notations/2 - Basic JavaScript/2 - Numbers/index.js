// IEEE 754-2008 - Padrão utilizado pelo JavaScript

// num1 vira uma String, sendo assim, o contatena ao num2.
// console.log(num1.toString() + num2);

// o parâmetro 2 fará o retorno da String em binário.
// console.log(num1.toString(2)); 

// define quantas casas decimais retornará e arredonda o valor.
// console.log(num1.toFixed(2));

// verifica se é um número inteiro - boolean
// console.log(Number.isInteger(num1));

let num1 = 10; // number
let num2 = 2.5; // number

// retorna true se for um número inválido - boolean
// Number.isNaN()

// resolver as falhas das contas de soma
// ((num1 * 100) + (num2 * 100)) / 100
// num1 = Number(num1.toFixed(2)) + num2