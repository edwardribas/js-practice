// Slice - retorna a cópia de um array, porém podendo ser cortado
const names = ['Edward', 'Paul', 'Jeff'];

const names2 = names.slice(0, 2)  // Jeff será excluído
const names3 = names.slice(0, -2)  // Jeff e Paul serão excluídos

// Split - separa uma string por determinado parâmetro e retorna um array
const username = "Eduardo Ribas";
const usernameArray = username.split(" ");  // ['Eduardo', 'Ribas']

// Join - converterá um array em uma string utilizando um separador.
const nameInArray = ['Alberto', 'Alves'];
const arrayNameToString = nameInArray.join(" "); // "Alberto Alves"