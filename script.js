document.addEventListener('DOMContentLoaded', function (){
    const botaoDeAcessibilidade = document.getElementById ('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById ('opcao_acessibilidade')

    botaoDeAcessibilidade.addEventListener('click'), function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    }