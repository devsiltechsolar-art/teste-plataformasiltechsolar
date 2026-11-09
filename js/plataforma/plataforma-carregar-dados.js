const contribuicao = 0.47
const comissao = 0.05
const impostos = 0.06
const retorno = 1000
const inflacao = 0.01


async function solicitarIdllancamentoAtual() {
    const resposta = await fetch(
        "https://script.google.com/macros/s/AKfycbyPPgbnYaN7txqu30GSWFMXbYeQIYEpkMjssCsYFh88Kvcx6De8AYnAP5mp5o444-YpQA/exec"
    );

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const dadosSolicitados = await resposta.json();

    console.log("ID recebido:", dadosSolicitados);

    localStorage.setItem('idAtualLancamento', dadosSolicitados);

    return dadosSolicitados; // ESSENCIAL!
}
solicitarIdllancamentoAtual()

//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.