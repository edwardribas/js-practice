// Try and Catch

// const soma = (x, y) => {
//     if (typeof x !== 'number' || typeof y !== 'number')
//         throw new Error('Both parameters need to be a number.');

//     return x + y;
// }

// try {
//     console.log(soma(4, '2'));
// } catch(err) {
//     console.log(`Output error: ${err.message}`);
// }

// Obter hora
const getHour = date => {
    if (date && !(date instanceof Date))
        throw Error('Parameter needs to be an instance from Date.');

    // caso o campo esteja vazio
    if (!date) date = new Date();

    return date.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const currentTime = new Date();
const someString = "I'm a string!";

try {
    console.log(getHour(someString));
} catch(e) {
    console.log(e.message);
} 

// finally {
//     // Sempre será executado.
//     console.log('Circulando.')
// }