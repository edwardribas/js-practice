// Factory Functions
// Funções que retornam objetos

// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         fala(){
//             return this;
//         }
//     }
// }

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        
    }
}

const p1 = criaPessoa('Eduardo', 'Ribas');
const p2 = criaPessoa('Luiz', 'Alberto');

console.log(p1)
console.log(p2)
// console.log(p1.fala('feliz'))