const [play, pause, reset, span, timer] = [
    document.querySelector('#play'),
    document.querySelector('#pause'),
    document.querySelector('#reset'),
    document.querySelector('.timer span'),
    document.querySelector('.timer')
]

let started = false, counter, data = new Date(0);

// Timer
const startCount = () => {
    if(!started){
        counter = setInterval(() => {
            data.setSeconds(data.getSeconds() + 1);
            span.textContent = data.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'GMT' });
        }, 1000)
    }
}

// Continue/start timer
play.onclick = () => {
    startCount();
    started = true;

    play.classList.add('active');
    pause.classList.remove('active');
    timer.classList.remove('paused');
}

// Pause Timer
pause.onclick = () => {
    if(started){
        started = false;
        clearInterval(counter);
        
        play.classList.remove('active');
        pause.classList.add('active');
        timer.classList.add('paused')
    }
}

// Reset Timer
reset.onclick = () => {
    data = new Date(0);
    started = false;
    clearInterval(counter)
    span.textContent = '00:00:00'

    play.classList.remove('active');
    pause.classList.remove('active');
    timer.classList.remove('paused');
}