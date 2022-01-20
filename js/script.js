(function () {

    const botaoJokenpo = document.getElementById("jokenpo");
    const jogadas = document.querySelectorAll('input[name="jogadas"]');
    let pontuacaoPlayer = 0;
    let pontuacaoPc = 0;

    botaoJokenpo.addEventListener("click", function () {

        let jogadaHumana;
        for (const jogada of jogadas) {
            if (jogada.checked) {
                jogadaHumana = jogada.value;
                break;
            }
        }

        if(!jogadaHumana) {

            alert("Você precisa selecionar uma opção");

        } else {

            let jogadaComputador = sortearJogadaComputador();
            
            verificarGanhador(jogadaHumana, jogadaComputador);
            
            marcarPlacar();
        }
        
    });

    const sortearJogadaComputador = function() {

        // Implementar um sorteio aleatorio que retorne "papel", "tesoura", ou "pedra";

        // Valor abaixo somente para testes
        return "papel";
    };

    const verificarGanhador = function(jogadaHumana, jogadaComputador) {

        // Implementar uma funcao que verifique se o jogador humano ou o computador ganhou
        // Incrementar a pontuacao (variavel pontuacaoPlayer ou pontuacaoPc) do ganhador

        // Valor abaixo somente para testes
        pontuacaoPlayer++;
    };

    const marcarPlacar = function(ganhador) {

        document.getElementById("pontuacao-player").textContent = pontuacaoPlayer;
        document.getElementById("pontuacao-pc").textContent = pontuacaoPc;
        
    };

})();