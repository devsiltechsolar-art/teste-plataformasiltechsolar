function carregarDadosNegociacao(){

const clienteNegociacao = document.getElementById('cliente-negociacao-proposta')
const dataNegociacao = document.getElementById('data-negociacao-proposta')
const placasNegociacao = document.getElementById('placas-negociacao-proposta')
const inversorNegociacao = document.getElementById('inversor-negociacao-proposta')
const valorFinalNegociacao = document.getElementById('valor-final-negociacao-proposta')

const resumoIdProposta = document.getElementById('id-resumo-negociacao')
const resumoValorPropostaNegociacao = document.getElementById('valor-final-resumo-negociacao')

resumoIdProposta.textContent = proposta.id
resumoValorPropostaNegociacao.textContent = formatarMoeda(proposta.valorFinalProposta)


clienteNegociacao.textContent = proposta.nome
dataNegociacao.textContent = proposta.data
placasNegociacao.textContent = proposta.placas
inversorNegociacao.textContent = proposta.inversor
valorFinalNegociacao.textContent = formatarMoeda(proposta.valorFinalProposta)



}

