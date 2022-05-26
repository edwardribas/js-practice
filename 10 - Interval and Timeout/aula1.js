const p = document.createElement('p');
document.body.appendChild(p)

const time = () => {
    const date = new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    p.innerText = date;
}

// Armazenar intervalo numa variável global para que ela possa ser encerrada
// com clearInterval(), caso seja necessário
timeCounter = setInterval(time, 1000);