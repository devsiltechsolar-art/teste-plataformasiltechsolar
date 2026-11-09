const campoNomeLancamento = document.getElementById('input-cliente-lancamento')

campoNomeLancamento.addEventListener('input', () =>{

  attResumoNomeLancamento()
  limparCamposLancamento()
  console.log(lancamento)
})

const campoCpfLancamento = document.getElementById('input-cpf-lancamento')

campoCpfLancamento.addEventListener('input', ()=>{
attResumoCpfLancamento()
limparCamposLancamento()
})

const campoContatoLancamento = document.getElementById('input-contato-lancamento')

campoContatoLancamento.addEventListener('input', () => {
attResumoContatoLancamento()
limparCamposLancamento()
} )


const campoRgLancamento = document.getElementById('input-rg-lancamento')

campoRgLancamento.addEventListener('input',() => {
  
  attResumoRgLancamento()
limparCamposLancamento()
} )

const campoEmailLancamento = document.getElementById('input-e-mail-lancamento')

campoEmailLancamento.addEventListener('input', () =>{

  attResumoEmailLancamento()
  limparCamposLancamento()
} )

const campoCepLancamento = document.getElementById('input-cep-lancamento')

campoCepLancamento.addEventListener("input", () => {


    const cep = inputCepLancamento.value.replace(/\D/g, "");
    const resumoCepLancamento = document.getElementById('cep-resumo-lancamento')
    proposta.cep = campoCepLancamento.value
    resumoCepLancamento.textContent = proposta.cep


    if (cep.length === 8) {
        buscarCep(cep);
        

    }
    limparCamposLancamento()
});
 const campoNumeroLancamento = document.getElementById('input-numero-lancamento')

 campoNumeroLancamento.addEventListener('input', ()=>{

  attResumoNumeroLancamento()
  limparCamposLancamento()
 })

 const campoNumeroInstalacaoLancamento = document.getElementById('input-numero-instalacao-lancamento')

 campoNumeroInstalacaoLancamento.addEventListener('input', ()=> {

  attResumoNumeroInstalacaoLancamento()
  limparCamposLancamento()
 })

 //Selects
const swipeLocalLancamento = document.querySelector('.swipeLocal')

 swipeLocalLancamento.addEventListener('change', attResumoLocalObraLancamento )

 const swipeUnificacaoLancamento = document.querySelector('.swipeUnificacao')

 swipeUnificacaoLancamento.addEventListener('change', attResumoUnificacaoLancamento )

  const swipeAdequacaoLancamento = document.querySelector('.swipeAdequacao')

 swipeAdequacaoLancamento.addEventListener('change', attResumoAdequacaoLancamento )

   const swipeReformaLancamento = document.querySelector('.swipeReforma')

 swipeReformaLancamento.addEventListener('change', attResumoReformaLancamento )

   const swipeEmbutidoLancamento = document.querySelector('.swipeEmbutido')

 swipeEmbutidoLancamento.addEventListener('change', attResumoEmbutidoLancamento )

 const swipeRateioLancamento = document.querySelector('.swipeRateio')

 swipeRateioLancamento.addEventListener('change', attResumoRateioLancamento )

 const campoSdrLancamento = document.getElementById('input-sdr-lancamento')

 campoSdrLancamento.addEventListener('change', () =>{

  attResumoSdrLancamento()
  limparCamposLancamento()
 })

 const campoCloserLancamento = document.getElementById('input-closer-lancamento')

 campoCloserLancamento.addEventListener('change', ()=>{

  attResumoCloserLancamento()
  limparCamposLancamento()
 })

  const campoBuLancamento = document.getElementById('input-bu-lancamento')

 campoBuLancamento.addEventListener('change', ()=>{
  attResumoBuLancamento()
  limparCamposLancamento()
 } )
 
  const campoCanalLancamento = document.getElementById('input-canal-lancamento')

 campoCanalLancamento.addEventListener('change', ()=>{

  attResumoCanalLancamento()
  limparCamposLancamento()
 } )

  const campoConcessionariaLancamento = document.getElementById('input-concessionaria-lancamento')

 campoConcessionariaLancamento.addEventListener('change', ()=>{

  attResumoConcessionariaLancamento()
  limparCamposLancamento()
 } )

   const campoUnidadeLancamento = document.getElementById('input-unidade-lancamento')

 campoUnidadeLancamento.addEventListener('change', ()=>{

  attResumoUnidadeLancamento()
  limparCamposLancamento()
 } )

    const campoObservacaoLancamento = document.getElementById('textarea-observacao')

 campoObservacaoLancamento.addEventListener('input', attResumoObservacaoLancamento)

 //Textarea

 const textareaObra = document.getElementById('textarea-local')

 textareaObra.addEventListener('input', attTextareaObra)

 const textareaUnificacao = document.getElementById('textarea-unificacao')

 textareaUnificacao.addEventListener('input', attTextareaUnificacao)

 
 const textareaAdequacao = document.getElementById('textarea-adequacao')

 textareaAdequacao.addEventListener('input', attTextareaAdequacao)

 
 const textareaReforma = document.getElementById('textarea-reforma')

 textareaReforma.addEventListener('input', attTextareaReforma)

  const textareaEmbutido = document.getElementById('textarea-embutido')

 textareaEmbutido.addEventListener('input', attTextareaEmbutido)

   const textareaRateio = document.getElementById('textarea-rateio')

 textareaRateio.addEventListener('input', attTextareaRateio)