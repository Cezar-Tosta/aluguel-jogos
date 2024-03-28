function alterarStatus(id){
    // Pega o jogo clicado
    let gameClicado = document.getElementById(`game-${id}`);
    // Pegar <div> e <a> do jogo clicado
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    alert(nomeJogo.textContent);

};
