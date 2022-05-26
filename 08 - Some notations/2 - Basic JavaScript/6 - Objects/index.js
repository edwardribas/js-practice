// Factory Function
// function newPerson (nome, sobrenome, idade){
//     return {
//         nome, sobrenome, idade
//     }
// }

// const person1 = newPerson('Luiz', 'Otávio', 32)
// const person2 = newPerson('Eduardo', 'Ribas', 17)

// console.log(person1.nome);
// console.log(person2.nome);

const pessoa1 = {
    nome: 'Eduardo',
    sobrenome: 'Ribas',
    idade: 17,

    // Métodos - methods
    fala () {
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi! ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++
    }
}

// 17
pessoa1.fala();
pessoa1.incrementaIdade();

// 18
pessoa1.fala();
pessoa1.incrementaIdade();

// 19
pessoa1.fala();
pessoa1.incrementaIdade();