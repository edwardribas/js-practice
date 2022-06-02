// Spread operator na atribuição

const names = ['Eduardo', 'José', 'Alberto'];

// valores por referência
// todas as alterações feitas em names serão refletidas em names 2
const names2 = names;

// atribuição com spread operator
// todos os valores de names serão atribuidos independentemente em names3
const names3 = [...names];


names.shift();
console.log(names2); // ['José', 'Alberto']
console.log(names3); // ['Eduardo', 'José', 'Alberto']

delete names[1]; // names[1] passará a ser undefined.

console.log(names2); // ['José', <1 empty item>]
console.log(names3); // ['Eduardo', 'José', 'Alberto']
