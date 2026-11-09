function calcularDadosNegociacao(){
inserirPagamento2()
mostrarPagamento2()

gerarTaxaPagamento1()
gerarTaxaPagamento2()

calcularPagamento1()
calcularPagamento2()

calcularPagamentoFinal()
    //Funções para inserir os dados na variavel Negociação
inserirValorNegociado()
inserirPagamento1()
inserirTipoPagamento1()
inserirParcelas1()


inserirTipoPagamento2()
inserirParcelas2()


calcularDesconto()
inserirDesconto()

calcularMCsNegociado()
inserirResultadoMcsNegociado()

calcularResultadoAnalise()
inserirResultadoAnalise()

alterarCorResultado()

atualizarResumoNegociacao()

}

function calcularDesconto(){


    const valorInicial = proposta.valorFinalProposta
    const valorNegociado = negociacao.valorNegociado

  const desconto = ((valorInicial - valorNegociado) / valorInicial) * 100   
    negociacao.desconto = desconto

    if (negociacao.desconto < 0){

        negociacao.desconto = 0

        return negociacao.desconto
    }
    else {

        return negociacao.desconto
    }
  
}
function calcularMCsNegociado(){

    
    const valorNegociado = negociacao.valorNegociado


    let comissaoMcs = valorNegociado * 0.05
    let impostoMcs = valorNegociado * 0.06
    let taxaCartao = negociacao.pagamentoCalculado1 + negociacao.pagamentoCalculado2


       

        const resultadoMcs = valorNegociado - (comissaoMcs + impostoMcs + proposta.cmv + taxaCartao)
        const mcsFinal =  (resultadoMcs / valorNegociado) *100

        negociacao.resultadoMcsNegociado = mcsFinal

        console.log("Comissao" + comissaoMcs)
        console.log("Imposto" + impostoMcs)
        console.log("CMV" + proposta.cmv)
        console.log("Taxa em Reais" + taxaCartao)

        
        return negociacao.resultadoMcsNegociado
    

    

}
function calcularResultadoAnalise(){

    const resultadoMcs = negociacao.resultadoMcsNegociado

    if (resultadoMcs >= 30 ){

        negociacao.resultadoAnalise = "Aprovado"

        return proposta.resultadoAnalise
    }

    if (resultadoMcs >= 27 && resultadoMcs <= 29.99 ) {

        negociacao.resultadoAnalise = "Autorização"

        return proposta.resultadoAnalise
    }

    if  (resultadoMcs <= 26.99 ){

        negociacao.resultadoAnalise = "Reprovado"

        return proposta.resultadoAnalise
    }


}
function gerarTaxaPagamento1(){

    const parcela = document.getElementById('parcela-pagamento-1-negociacao')
    const pagamento = document.getElementById('forma-pagamento-1-negociacao')
    let taxa = 0
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "1") {

        taxa = 3.14;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value == "2") {
        taxa = 4.41;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "3") {
        taxa = 5.2;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "4") {
        taxa = 6;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "5") {
        taxa = 6.79;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "6") {
        taxa = 7.58;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "7") {
        taxa = 8.52;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "8") {
        taxa = 9.31;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "9") {
        taxa = 10.1;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "10") {
        taxa = 10.9;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "11") {
        taxa = 11.69;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "12") {
        taxa = 12.48;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "13") {
        taxa = 13.27;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "14") {
        taxa = 14.07;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "15") {
        taxa = 14.86;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "16") {
        taxa = 15.65;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "17") {
        taxa = 16.44;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "18") {
        taxa = 17.23;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
    else {
        taxa = 0;
        negociacao.taxaCartao1 = taxa

        return negociacao.taxaCartao1
    }
   
}
function gerarTaxaPagamento2(){

    const parcela = document.getElementById('parcela-pagamento-2-negociacao')
    const pagamento = document.getElementById('forma-pagamento-2-negociacao')
    let taxa = 0
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "1") {

        taxa = 3.14;
        negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "2") {
        taxa = 4.41;
        negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "3") {
        taxa = 5.2;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "4") {
        taxa = 6;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "5") {
        taxa = 6.79;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "6") {
        taxa = 7.58;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "7") {
        taxa = 8.52;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "8") {
        taxa = 9.31;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "9") {
        taxa = 10.1;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "10") {
        taxa = 10.9;
        negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "11") {
        taxa = 11.69;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "12") {
        taxa = 12.48;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "13") {
        taxa = 13.27;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "14") {
        taxa = 14.07;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "15") {
        taxa = 14.86;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "16") {
        taxa = 15.65;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "17") {
        taxa = 16.44;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    if (pagamento.value === "Cartão de Crédito" && parcela.value === "18") {
        taxa = 17.23;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2
    }
    else {
        taxa = 0;
         negociacao.taxaCartao2 = taxa

        return negociacao.taxaCartao2

    }
   
   
}
function calcularPagamento1(){

    const valor = document.getElementById('valor-pagamento-1').value
    const taxa = negociacao.taxaCartao1

    const pagamento1 = (valor * taxa) / 100
   
    negociacao.pagamentoCalculado1 = pagamento1

  
    return negociacao.pagamentoCalculado1
}
function calcularPagamento2(){

    const valor = document.getElementById('valor-pagamento-2').textContent
    const taxa = negociacao.taxaCartao2

    const pagamento2 = (valor * taxa) / 100

    negociacao.pagamentoCalculado2 = pagamento2

    return 
}
function calcularPagamentoFinal(){

    const pagamento1 = negociacao.pagamentoCalculado1
    const pagamento2 = negociacao.pagamentoCalculado2

    const resultado = pagamento1 + pagamento2

    return resultado
}

