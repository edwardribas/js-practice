const main = document.querySelector('main');

const elementos = [
    {tag: 'h2', text: 'Frase 1'},
    {tag: 'header', text: 'Frase 2'},
    {tag: 'article', text: 'Frase 3'},
    {tag: 'a', text: 'Frase 4', href: 'https://edwardribas.github.io'},
]

for(let i = 0; i < elementos.length; i++){
    const {tag, text, href} = elementos[i]; // elementos[i] == {}
    
    let item = document.createElement(tag)
    item.innerText = text;
    
    if (href) item.setAttribute('href', href);

    main.appendChild(item)
}

