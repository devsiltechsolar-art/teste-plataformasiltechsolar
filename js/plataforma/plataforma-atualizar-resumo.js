
//Funções de custo
function atualizarResumo(){

    const idResumo = document.getElementById('id-resumo-proposta')
    idResumo.textContent = proposta.id

    const dataResumo = document.getElementById('data-resumo-proposta') 
    dataResumo.textContent = proposta.data

    const colaborador = document.getElementById('colaborador-resumo-proposta')
    colaborador.textContent = proposta.colaborador

    const nomeResumo = document.getElementById('nome-resumo-proposta')
    nomeResumo.textContent = proposta.nome

    const telefoneResumo = document.getElementById('telefone-resumo-proposta')
    telefoneResumo.textContent = proposta.telefone

    const testeResumo = document.getElementById('teste-resumo-proposta')
    testeResumo.textContent = proposta.teste

    const canalResumo = document.getElementById('canal-resumo-proposta')
    canalResumo.textContent = proposta.canal

    const localResumo = document.getElementById('local-resumo-proposta')
    localResumo.textContent = proposta.local

    const sistemaResumo = document.getElementById('sistema-resumo-proposta')
    sistemaResumo.textContent = proposta.sistema

    const moduloResumo = document.getElementById('modulo-resumo-proposta')
    moduloResumo.textContent = proposta.modulo

    const inversorResumo = document.getElementById('inversor-resumo-proposta')
    inversorResumo.textContent = proposta.inversor
    
    const promocaoResumo = document.getElementById('promocao-resumo-proposta')
    promocaoResumo.textContent = proposta.promocao

    const placasResumo = document.getElementById('placas-resumo-proposta')
    placasResumo.textContent = proposta.placas

    const placasFormulario = document.getElementById('quantidade-placa-proposta')
    placasFormulario.textContent = proposta.placas

    const expansaoResumo = document.getElementById('expansao-resumo-proposta')
    expansaoResumo.textContent = proposta.expansao

    const qtdExpansaoResumo = document.getElementById('qtd-expansao-resumo-proposta')

    if(expansaoFormularioProposta.value === 'Sim'){

       qtdExpansaoResumo.textContent = proposta.qtdExpansao
    }
    else{

         qtdExpansaoResumo.textContent = 0
    }
    

    const hspResumo = document.getElementById('hsp-resumo-proposta')
    hspResumo.textContent = proposta.hsp

    const precoKwhResumo = document.getElementById('preco-kwh-resumo-proposta')
    precoKwhResumo.textContent = formatarMoeda(proposta.precoKwh)

    const instalacaoResumo = document.getElementById('instalacao-resumo-proposta')
    instalacaoResumo.textContent = proposta.instalacao

    const telhadoResumo = document.getElementById('telhado-resumo-proposta')
    telhadoResumo.textContent = proposta.telhado

    const areaResumo = document.getElementById('area-resumo-proposta')
    areaResumo.textContent = proposta.area + "m²"

    const cmvResumo = document.getElementById('cmv-resumo-proposta')
    cmvResumo.textContent = formatarMoeda(proposta.cmv)

    const custoTelhadoResumo = document.getElementById('custo-telhado-resumo-proposta')
    custoTelhadoResumo.textContent = formatarMoeda(proposta.custoTelhado)

    const custoHomologacaoResumo = document.getElementById('custo-homologacao-resumo-proposta')
    custoHomologacaoResumo.textContent = formatarMoeda(proposta.custoHomologacao)

    const custoInstalacaoResumo = document.getElementById('custo-instalacao-resumo-proposta')
    custoInstalacaoResumo.textContent = formatarMoeda(proposta.custoInstalacao)

    const custoRetornoResumo = document.getElementById('custo-retorno-resumo-proposta')
    custoRetornoResumo.textContent = formatarMoeda(proposta.custoRetorno)

    const custoKitGeradorResumo = document.getElementById('custo-kit-gerador-resumo-proposta')
    custoKitGeradorResumo.textContent = formatarMoeda(proposta.custoKitGerador)

    const contaSemSiltechResumo = document.getElementById('conta-sem-siltech-resumo-proposta')
    contaSemSiltechResumo.textContent = validarDado(
    proposta.contaSemSiltech,
    formatarMoeda);

    const contaComSiltechResumo = document.getElementById('conta-com-siltech-resumo-proposta')
    contaComSiltechResumo.textContent = validarDado(
    proposta.contaComSiltech,
    formatarMoeda);

    const economiaAnualResumo = document.getElementById('economia-anual-resumo-proposta')
    economiaAnualResumo.textContent = validarDado(
    proposta.economiaAnual,
    formatarMoeda);

    const economiaEm15AnosResumo = document.getElementById('economia-15-resumo-proposta')
    economiaEm15AnosResumo.textContent = validarDado(
    proposta.economiaEm15Anos,
    formatarMoeda);

    const valorFinalResumo = document.getElementById('valor-final-resumo-proposta')
    valorFinalResumo.textContent = formatarMoeda(proposta.valorFinalProposta)

     const energiGeradaResumo = document.getElementById('energia-gerada-resumo-proposta')
    energiGeradaResumo.textContent = proposta.energiaGerada.toFixed(1)

}
