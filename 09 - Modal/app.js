const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.main .btn');
const closeBtn = document.querySelector('.modal .btn');
const back = document.querySelector('.back');

const toggleModal = () => [back, modal].forEach(e => e.classList.toggle('active'));

[openBtn, closeBtn, back].forEach(e => e.onclick = () => toggleModal());

document.onkeydown = e => {
    if (e.key = "Escape" && modal.classList.contains('active')) toggleModal();
}