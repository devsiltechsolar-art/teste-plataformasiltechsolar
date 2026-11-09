function inserirNome(){

    const nomeResumo = document.getElementById('nome-resumo-proposta')
    proposta.nome = nomeFormularioProposta.value
}
function inserirTelefone(){

    const telefoneResumo = document.getElementById('telefone-resumo-proposta')

    proposta.telefone = telefoneFormularioProposta.value
    telefoneResumo.textContent = proposta.telefone

}
function inserirTeste () { 
    
        const testeFormularioProposta = document.getElementById('teste-proposta')

        if(testeFormularioProposta.value === "Sim") {

            proposta.teste = "Sim"
  
        }
        else {
            proposta.teste = "Não"

 
        }
    

}
function inserirCanal() {

        if(proposta.teste === "Sim"){
           proposta.canal = 'Teste'
        }
        else {
             proposta.canal = canalFormularioProposta.value
        }
}
function inserirModulo(){

    proposta.modulo = moduloFormularioProposta.value
}
function inserirSistema(){

    proposta.sistema = sistemaFormularioProposta.value
}
function inserirPromocao(){

    proposta.promocao = promocaoFormularioProposta.value
}
function calcularPlacaComEnergia() {

    const energiaGerada = document.getElementById("modulo-proposta");

    let energia = 0;

    if (energiaGerada.value === "575Wp Tier 1") energia = 575;
    if (energiaGerada.value === "585Wp Tier 1") energia = 585;
    if (energiaGerada.value === "610Wp Tier 1") energia = 610;
    if (energiaGerada.value === "700Wp Tier 1") energia = 700;

    const consumo = Number(document.getElementById("consumo-energia-proposta").value);
    const hsp = Number(proposta.hsp);

    if (energia === 0) {
      return "Aguardando Módulo"
    }
    if (!hsp) {
    return "Aguardando Hsp"
    }
    if (!consumo) {
      
      return "Aguardando Consumo"
    }
    const geracaoMensal = (hsp * energia * 30 * 0.8) / 1000;

    return Math.ceil(consumo / geracaoMensal);

}
function inserirQuantidade() {

    const consumoEnergia = document.getElementById("consumo-energia-proposta");
    const consumoPlacas = document.getElementById("consumo-placa-proposta");

    if (consumoEnergia.value.trim() !== "") {

        inserirQuantidadeEnergia();

    } else if (consumoPlacas.value.trim() !== "") {

        inserirQuantidadePlaca();

    } else {

        proposta.placas = 0;

    }

}
function inserirQuantidadePlaca() {

    
    const campoEnergia = document.getElementById('consumo-placa-proposta')

  
    proposta.placas = consumoPlacas.value
}
function inserirQuantidadeEnergia() {

    
    const campoPlacas = document.getElementById('consumo-energia-proposta')

    proposta.placas = calcularPlacaComEnergia()

    

}
function inserirExpansao(){


  const expansaoFormularioProposta = document.getElementById('expansao-proposta')

    if(expansaoFormularioProposta.value === "Sim"){

        proposta.expansao = "Sim"
        
    }
    else{

        proposta.expansao = "Não";
  
    }
}
function inserirQtdExpansao(){

    proposta.qtdExpansao = qtdExpansaoFormularioProposta.value 

}
function inserirPrecoKwh(){

    if(precoKwhFormularioProposta.value === ""){

         proposta.precoKwh = 1.08
        
    }
    else {
         proposta.precoKwh = precoKwhFormularioProposta.value
    }
     
}
function inserirInstalacao(){

    proposta.instalacao = instalacaoFormularioProposta.value

}
function inserirTelhado(){

    proposta.telhado = telhadoFormularioProposta.value

}