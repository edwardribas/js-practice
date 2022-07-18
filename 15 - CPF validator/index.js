const getValues = (cpf = [...cpf], informedDigits, count) => {
    let digit = 11 - (cpf.reduce((acc, value, index) => {
        acc += value * ((count == 0 ? 11 : 12) - (index+1))
        return acc;
    }, 0) % 11)
    
    digit = digit > 9 ? 0 : digit;
    if (count == 0) cpf.push(digit);
    return { digit, validation: digit == +informedDigits[count], cpf};
}

const validateDigits = cpf => {
    const cpfValues = [];
    
    cpf.forEach((e, i) => {
        if (i >= 9) return;
        e = +e;
        cpfValues.push(e);
    })

    const firstDigit = getValues(cpfValues, [cpf[9], cpf[10]], 0)
    const secondDigit = getValues(firstDigit.cpf, [cpf[9], cpf[10]], 1)
    return { firstDigit, secondDigit };
}

const validateCPF = cpf => {
    if (cpf === undefined || cpf.toString().trim() === "") throw new TypeError('Empty arguments are not accepted.');

    cpf = cpf.toString().split("");
    const regResult = /^[0-9]+$/.test(cpf.join(''));

    if (!regResult) throw new TypeError('Only numbers characters are accepted.');
    if (cpf.length != 11) throw new TypeError(`CPF needs to have 11 numbers, but ${cpf.length} ${cpf.length <= 1 ? 'was' : 'were'} found.`);

    console.log(`Validation successfully initiated! (CPF: ${cpf.join('')})`);
    
    const result = validateDigits(cpf);
    const { firstDigit: {validation: firstVal}, secondDigit: {validation: secondVal} } = result;
    
    if ( !firstVal || !secondVal ) throw new Error(`Informed CPF (${cpf.join('')}) is not valid.`);
    console.log(`The following CPF: ${cpf.join('')} is valid.`);
}

// validateCPF('Number here');

