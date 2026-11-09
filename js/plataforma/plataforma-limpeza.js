function limparCamposProposta() {

  const nomeProposta = document.getElementById('nome-proposta')
  const telefoneProposta = document.getElementById('telefone-proposta')
  const testeProposta = document.getElementById('teste-proposta')
  const canalProposta = document.getElementById('canal-proposta')
  const localProposta = document.getElementById('local-proposta')
  const moduloProposta = document.getElementById('modulo-proposta')
  const inversorProposta = document.getElementById('inversor-proposta')
  const promocaoProposta = document.getElementById('promocao-proposta')
  const consumoEnergiaProposta = document.getElementById('consumo-energia-proposta')
  const consumoPlacaProposta = document.getElementById('consumo-placa-proposta')
  const expansaoProposta = document.getElementById('expansao-proposta')
  const qtdExpansaoProposta = document.getElementById('qtd-expansao-proposta')
  const precoProposta = document.getElementById('preco-kwh-proposta')
  const instalacaoProposta = document.getElementById('instalacao-proposta')
  const telhadoProposta = document.getElementById('telhado-proposta')

  nomeProposta.value = ""
  telefoneProposta.value = ""
  testeProposta.value = ""
  canalProposta.value = ""
  localProposta.value = ""
  moduloProposta.value = ""
  inversorProposta.value = ""
  promocaoProposta.value = ""
  consumoEnergiaProposta.value = ""
  consumoPlacaProposta.value = ""
  expansaoProposta.value = ""
  qtdExpansaoProposta.value = ""
  precoProposta.value = ""
  instalacaoProposta.value = ""
  telhadoProposta.value = ""

  localStorage.removeItem('propostaGerada')

}
function limparCamposResumoProposta() {
  const textos = document.querySelectorAll('.limpar-proposta');

  textos.forEach(texto => {
    texto.textContent = "";
  });
}
function limparCamposValidados (){


  const containerNome = document.getElementById('c-nome')
  const containerTeste = document.getElementById('c-teste')
  const containerCanal = document.getElementById('c-canal')
  const containerCidade = document.getElementById('c-cidade')
  const containerModulo = document.getElementById('c-modulo')
  const containerEnergia = document.getElementById('c-energia-proposta')
  const containerPlacas = document.getElementById('c-placa-proposta')
  const containerExpansao = document.getElementById('c-expansao')
  const containerQtdExpansao = document.getElementById('c-expansao-placa')
  const containerPrecoKwh = document.getElementById('c-preco-kwh')
  const containerInstalacao = document.getElementById('c-instalacao')
  const containerTelhado = document.getElementById('c-telhado')
  const msgErro = document.getElementById('mensagem-erro-proposta')

    containerNome.classList.remove('erro-borda')
    containerTeste.classList.remove('erro-borda')
    containerCanal.classList.remove('erro-borda')
    containerCidade.classList.remove('erro-borda')
    containerModulo.classList.remove('erro-borda')
    containerEnergia.classList.remove('erro-borda')
    containerPlacas.classList.remove('erro-borda')
    containerExpansao.classList.remove('erro-borda')
    containerQtdExpansao.classList.remove('erro-borda')   
    containerPrecoKwh.classList.remove('erro-borda')
    containerInstalacao.classList.remove('erro-borda')
    containerTelhado.classList.remove('erro-borda')
    msgErro.classList.add('hidden')

}
