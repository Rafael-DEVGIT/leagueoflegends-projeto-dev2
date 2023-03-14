// OBJETIVO  - Pagica com 5 botoes que mudam imagens e com links na laretal// 

// 1- Identifiar elemtnso HTML (botoes) 
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll ('.imagem');

// 2- identificar o clique nos botoes 
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice);
        desativarBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
        
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
