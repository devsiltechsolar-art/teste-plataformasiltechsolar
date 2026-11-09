
const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento');

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento);

let enviandoLancamento = false;

async function enviarDadosLancamento() {
    const lancamentoValidado = validarVazioLancamento();
    const botaoEnviar = document.getElementById('btn-enviar-lancamento')

    if (enviandoLancamento) return;

    if (lancamentoValidado === "Sim") {
        console.log("Proposta não validada");
        return;
    }

    enviandoLancamento = true;
    botaoEnviar.style.pointerEvents = "none";
    botaoEnviar.style.opacity = "0.6";
    botaoEnviar.setAttribute("aria-disabled", "true");
    try {
        // Aguarda o retorno do ID do lançamento atual

        

        const idLancamento = await solicitarIdllancamentoAtual();

        // Utiliza o ID retornado antes de enviar
        proposta.idLancamento = idLancamento;
        proposta.idLancamentoAtual = idLancamento + 1;


        console.log("ID do lançamento:", proposta.idLancamento);
        console.log("Proposta validada");
        console.log(proposta);
        

        const url = "https://script.google.com/macros/s/AKfycbyPPgbnYaN7txqu30GSWFMXbYeQIYEpkMjssCsYFh88Kvcx6De8AYnAP5mp5o444-YpQA/exec";

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(lancamento)
        });

        const data = await response.json();

        console.log(data);

        attIdLancamento();
        lancamentoFinalizadoSelecionado();

    } catch (error) {
        console.error("Erro ao enviar lançamento:", error);
    }
    finally {
    enviandoLancamento = false;
    botaoEnviar.style.pointerEvents = "";
    botaoEnviar.style.opacity = "";
    botaoEnviar.removeAttribute("aria-disabled");
  }
}


//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.