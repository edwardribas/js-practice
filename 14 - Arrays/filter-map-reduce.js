const numbers = [3, 10, 60, 50, 24, 2, 1, 9, 59];
// console.log(numbers)
console.log(" ")

// filtrar pares
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers) // [ 10, 60, 50, 24, 2 ]

// dobrar valores
const doubledNumbers = numbers.map(number => number * 2)
// console.log(doubledNumbers) // [ 6, 20, 120, 100, 48, 4,  2,  18, 118]

// reduzir (somar tudo)
const sumNumbers = numbers.reduce((acc, value) => acc += value);
// console.log(sumNumbers) // 218

// tudo junto
const engenhoca = numbers. // array original
    filter(number => number % 2 === 0). // [ 10, 60, 50, 24, 2 ]
    map(number => number * 2). // [ 20, 120, 100, 48, 4]
    reduce((acc, value) => acc += value); // 292

// console.log(engenhoca) // 292