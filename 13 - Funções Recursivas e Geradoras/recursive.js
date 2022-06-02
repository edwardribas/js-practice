// Funções recursivas

// São, basicamente, funções que chamam a si mesma um determinado
// número de vezes. Elas possuem um Maximum Call Stack Size que previne que seu código
// fique em um loop infinito, caso algo tenha dado errado.

const recursive = num => {
    console.log(num);
    if(num >= 10) return;
    num++;
    recursive(num);
}

recursive(1);