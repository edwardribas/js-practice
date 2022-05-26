const paragraphs = document.querySelectorAll('p'),
      backgroud = getComputedStyle(document.body).backgroundColor
;
// of - retorna o valor, conteúdo
// in - retorna a chave, propriedade, índice
for(let p of paragraphs){
    p.style.backgroundColor = backgroud;
    p.style.color = "rgb(255, 255, 255";
}