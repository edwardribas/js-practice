// Generator Functions

// Lazy Evaluation - nunca te entregará todos os valores de uma vez
// Retorna os valores pausadamente

function* getValues(){
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const values = getValues();

// .next() retorna um objeto com as chaves 'value' e 'done (boolean)'
console.log(values.next()); // { value: Valor 1, done: false }
console.log(values.next()); // { value: Valor 2, done: false }
console.log(values.next()); // { value: Valor 3, done: false }
console.log(values.next()); // { value: undefined, done: true }

const values2 = getValues();

// Também é possível iterar sobre os valores
for(let values of values2){
    console.log(values);
}
console.log(values2.next())

// Gerador infinito
function* getNumber() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

const number = getNumber();
console.log(number.next().value); // 0 - 1
console.log(number.next().value); // 1 - 2
console.log(number.next().value); // 2 - 3
console.log(number.next().value); // 3 - 4
console.log(number.next().value); // 4 - 5

console.log(" ");

// Usar yields de outros generators
function* showNumbers(){
    yield 1;
    yield 2;
    yield 3;
}

function* showNumbers2(){
    yield* showNumbers();
    yield 4;
    yield 5;
    yield 6;
}

const seeNumbers = showNumbers2();
for(let number of seeNumbers){
    console.log(number);
}

// o return faz com que o resto do código se torne inalcançável.
// também é possível retornar (return ou yield) funções.