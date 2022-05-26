const form = document.querySelector('.form-wrapper form'),
      result = document.querySelector('.result')
;

form.onsubmit = e => {
    e.preventDefault();

    const peso = Number(form.querySelectorAll('input')[0].value);
    const altura = Number(form.querySelectorAll('input')[1].value) / 100;
    let imc, classificacao;
    
    if(peso && altura){
        imc = (peso / (altura * altura)).toFixed(2);

        if (imc < 18.5) classificacao = 'Abaixo do peso';
        else if (imc >= 18.5 && imc < 25) classificacao = 'Peso normal';
        else if (imc >= 25 && imc < 30) classificacao = 'Sobrepeso';
        else if (imc >= 30 && imc < 35) classificacao = 'Obesidade Grau I';
        else if (imc >= 35 && imc < 40) classificacao = 'Obesidade Grau II';
        else classificacao = 'Obesidade Grau III';

        if (result.classList.contains('error')) result.classList.remove('error');
        
        result.innerHTML = `Seu índice de massa corporal é de <span>${imc}</span> - <span>${classificacao}</span>.`
    }else{
        result.classList.add('error');
        result.textContent = 'Preencha os dois campos!'

    }
}
