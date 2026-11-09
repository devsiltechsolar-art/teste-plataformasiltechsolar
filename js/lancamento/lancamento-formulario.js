const swipeLocal = document.querySelector('.swipeLocal')
const swipeUnificacao = document.querySelector('.swipeUnificacao')
const swipeAdequacao = document.querySelector('.swipeAdequacao')
const swipeReforma = document.querySelector('.swipeReforma')
const swipeEmbutido = document.querySelector('.swipeEmbutido')
const swipeRateio = document.querySelector('.swipeRateio')


swipeLocal.addEventListener('change', mostrarLocal)
swipeUnificacao.addEventListener('change', mostrarUnificacao)
swipeAdequacao.addEventListener('change', mostrarAdequacao)
swipeReforma.addEventListener('change', mostrarReforma)
swipeEmbutido.addEventListener('change', mostrarEmbutido)
swipeRateio.addEventListener('change', mostrarRateio)



function mostrarLocal() {


    if(swipeLocal.checked) {


        const textArea = document.getElementById('textarea-local')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-local')
        textArea.classList.add('hidden')

   }
        


}
function mostrarUnificacao() {


    if(swipeUnificacao.checked) {

        const textArea = document.getElementById('textarea-unificacao')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-unificacao')
        textArea.classList.add('hidden')

   }
        


}
function mostrarAdequacao() {


    if(swipeAdequacao.checked) {

        const textArea = document.getElementById('textarea-adequacao')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-adequacao')
        textArea.classList.add('hidden')

   }
        


}
function mostrarReforma() {


    if(swipeReforma.checked) {

        const textArea = document.getElementById('textarea-reforma')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-reforma')
        textArea.classList.add('hidden')

   }
        


}
function mostrarEmbutido() {


    if(swipeEmbutido.checked) {

        const textArea = document.getElementById('textarea-embutido')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-embutido')
        textArea.classList.add('hidden')

   }
        


}
function mostrarRateio() {


    if(swipeRateio.checked) {

        const textArea = document.getElementById('textarea-rateio')
        textArea.classList.remove('hidden')
    }
   else {

            const textArea = document.getElementById('textarea-rateio')
        textArea.classList.add('hidden')

   }
        


}

const botaoNovaProposta = document.getElementById('botao-lancamento-finalizacao-proposta')
const botaoDashboard = document.getElementById('botao-lancamento-finalizacao-dashboard')
const botaoHistorico = document.getElementById('botao-lancamento-finalizacao-historico')

botaoNovaProposta.addEventListener('click', ()=>{

    propostaSelecionado() 
    limparCamposResumoProposta()
    limparCamposProposta()

})
botaoDashboard.addEventListener('click', ()=>{

    dashboardSelecionado()
    limparCamposResumoProposta()
    limparCamposProposta()
})
botaoHistorico.addEventListener('click', ()=>{

    historicoSelecionado()
    limparCamposResumoProposta()
    limparCamposProposta()
})