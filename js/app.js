function alterarStatus(id){
    // Pega o jogo clicado
    let gameClicado = document.getElementById(`game-${id}`);
    // Pegar <div> e <a> do jogo clicado
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        // Adiciona uma confirmção antes de devolver o jogo
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados = jogosAlugados - 1;
        }
        
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados = jogosAlugados + 1;
    }

    contarEExibirJogosAlugados();
};

let jogosAlugados = 0;
function contarEExibirJogosAlugados(){
    alert(`Total de jogos alugados: ${jogosAlugados}`);
};

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});