const img = document.querySelectorAll('.gallery img');
const back = document.querySelector('.back');
const backImage = document.querySelector('.back img');
const closeButton = document.querySelector('.back button');

closeButton.onclick = () => back.classList.toggle("active");

document.onkeydown = e => {
    if (back.classList.contains('active') && e.key == "Escape") {
        back.classList.toggle('active');
    };
}

img.forEach(item => {
    item.onclick = () => {
        backImage.src = item.src;
        back.classList.toggle('active')
    }
})