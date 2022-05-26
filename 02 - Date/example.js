const fixTime = num => num < 10 ? `0${num}` : num;

const dataAtual = () => {
    const d = new Date();

    const dia = fixTime( d.getDate() );
    const mes = fixTime( d.getMonth() + 1);
    const ano = fixTime( d.getFullYear() );

    const hora = fixTime( d.getHours() );
    const minuto = fixTime( d.getMinutes() );
    const segundo = fixTime( d.getSeconds() );


    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

console.log(dataAtual());