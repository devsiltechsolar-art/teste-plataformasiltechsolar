function validacaoPorCampoVazio(){

  const nome = document.getElementById('nome-proposta')
  const containerNome = document.getElementById('c-nome')
  const teste = document.getElementById('teste-proposta')
  const containerTeste = document.getElementById('c-teste')
  const canal = document.getElementById('canal-proposta')
  const containerCanal = document.getElementById('c-canal')
  const hsp = document.getElementById('hsp-proposta')
  const containerCidade = document.getElementById('c-cidade')
  const modulo = document.getElementById('modulo-proposta')
  const containerModulo = document.getElementById('c-modulo')
  const placas = document.getElementById('quantidade-placa-proposta')
  const containerEnergia = document.getElementById('c-energia-proposta')
  const containerPlacas = document.getElementById('c-placa-proposta')
  const expansao = document.getElementById('expansao-proposta')
  const containerExpansao = document.getElementById('c-expansao')
  const qtdExpansao = document.getElementById('qtd-expansao-proposta')
  const containerQtdExpansao = document.getElementById('c-expansao-placa')
  const preco = document.getElementById('preco-kwh-proposta')
  const containerPrecoKwh = document.getElementById('c-preco-kwh')
  const instalacao = document.getElementById('instalacao-proposta')
  const containerInstalacao = document.getElementById('c-instalacao')
  const telhado = document.getElementById('telhado-proposta')
  const containerTelhado = document.getElementById('c-telhado')
  const msgErro = document.getElementById('mensagem-erro-proposta')

  if (nome.value === "") {

    containerNome.classList.add('erro-borda')
    msgErro.classList.remove("hidden")
    return campoVazio = "Sim"
  }
  if (teste.value === "") {

      containerTeste.classList.add('erro-borda')
      msgErro.classList.remove("hidden")
      return campoVazio = "Sim"
    
    }

     if (canal.value=== "" && teste.value === "Não") {
    
      containerCanal.classList.add('erro-borda')
      msgErro.classList.remove("hidden")
      return campoVazio = "Sim"
    
    }
    if (hsp.textContent === "0,00" || hsp.textContent === "Cidade não encontrada") {

    containerCidade.classList.add('erro-borda')
        msgErro.classList.remove("hidden")

    return campoVazio = "Sim"
  }
   if (modulo.value === "") {

    containerModulo.classList.add('erro-borda')
        msgErro.classList.remove("hidden")

    return campoVazio = "Sim"
  }
  if (placas.textContent === "0") {

    containerEnergia.classList.add('erro-borda')
    containerPlacas.classList.add('erro-borda')
        msgErro.classList.remove("hidden")

    return campoVazio = "Sim"
  }

  if (expansao.value === ""){

    containerExpansao.classList.add('erro-borda')
    msgErro.classList.remove("hidden")
    return campoVazio = "Sim"
  }
 if (expansao.value === "Sim" &&
    (qtdExpansao.value === "" || qtdExpansao.value === "0")) {
  containerQtdExpansao.classList.add("erro-borda");
  msgErro.classList.remove("hidden");
  return "Sim";
}
  if (preco.value === "") {

    containerPrecoKwh.classList.add('erro-borda')
        msgErro.classList.remove("hidden")

    return campoVazio = "Sim"
  }
   if (instalacao.value === "") {

    containerInstalacao.classList.add('erro-borda')
        msgErro.classList.remove("hidden")

    return campoVazio = "Sim"
  }
  if (telhado.value === "") {

    containerTelhado.classList.add('erro-borda')
    msgErro.classList.remove("hidden")

    return campoVazio = "Sim"
  }
  
  
}
function validarDado(valor, formatador = null) {

    const numero = Number(valor);

    if (
        valor === null ||
        valor === undefined ||
        valor === "" ||
        !Number.isFinite(numero)
    ) {
        return "Aguardando dados";
    }

    return formatador ? formatador(numero) : numero;
}
