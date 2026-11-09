function gerarColaborador() {

  const usuarioAtivo = document.getElementById('usuario-plataforma')

  proposta.colaborador = usuarioAtivo.textContent

  return proposta.colaborador

}
function gerarIdProposta() {
    const hoje = new Date();

    const data =
      hoje.getFullYear() +
      String(hoje.getMonth() + 1).padStart(2, "0") +
      String(hoje.getDate()).padStart(2, "0");

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < 3; i++) {
      codigo += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    const resultado = `PROP${data}${codigo}`;
    proposta.id = resultado;

    return proposta.id ;
}
function gerarDataProposta() {
    const hoje = new Date();

    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();


    const resultado = `${dia}/${mes}/${ano}`

    proposta.data = resultado

    return proposta.data
}
function gerarInversor(){

    const placas = proposta.placas
    const potencia = proposta.potenciaPlaca
    const inversor = placas * potencia

    if(inversor < 4500) {

      proposta.inversor = "Huawei Inversor - 3kW"

      return proposta.inversor
    } 
    if(inversor > 4500 && inversor < 6000) {

      proposta.inversor = "Huawei Inversor - 4kW"
      
      return proposta.inversor
    } 
    if(inversor > 6000 && inversor < 7500) {

      proposta.inversor = "Huawei Inversor - 5kW"
      
      return proposta.inversor
    } 
    if(inversor > 7500 && inversor < 9000) {

      proposta.inversor = "Huawei Inversor - 6kW"
      
      return proposta.inversor
    } 
    if(inversor > 9000 && inversor < 11250) {

      proposta.inversor = "Huawei Inversor - 7.5kW"
      
      return proposta.inversor
    } 
    if(inversor > 11250 && inversor < 15000) {

      proposta.inversor = "Huawei Inversor - 10kW"
      
      return proposta.inversor
    } 
    if(inversor > 15000) {

      proposta.inversor = "Huawei Inversor - 10kW"
      
      return proposta.inversor
    } 

}
function gerarArea(){

    const area = proposta.placas * 3
    proposta.area = area

   return proposta.area
 }
function gerarPotencia() {

  const campoModulo = document.getElementById('modulo-proposta')

  if (campoModulo.value === "575Wp Tier 1" ) {

    const potencia = 575
    proposta.potenciaPlaca = potencia

    return proposta.potenciaPlaca
  }
  if (campoModulo.value === "585Wp Tier 1" ) {
    
    const potencia = 585
    proposta.potenciaPlaca = potencia
    return proposta.potenciaPlaca
  }
    
  if (campoModulo.value === "610Wp Tier 1" ) {
    
    const potencia = 610
    proposta.potenciaPlaca = potencia
    return proposta.potenciaPlaca
  } 
  if (campoModulo.value === "615Wp Tier 1" ) {
    
    const potencia = 615
    proposta.potenciaPlaca = potencia
    return proposta.potenciaPlaca
  } 
  
  if (campoModulo.value === "700Wp Tier 1" ) {
      const potencia = 700
    proposta.potenciaPlaca = potencia
    return proposta.potenciaPlaca
  }

}
 function gerarEconomiaEm15Anos() {
    return proposta.economiaEm15Anos = (proposta.economiaAnual * ((1 + inflacao) ** 15 - 1)) / inflacao;
}
function gerarEconomiaAnual() {
    const custoEnergia = proposta.precoKwh;
    return proposta.economiaAnual = calcularEnergia() * custoEnergia * 12 - contaComSiltech() * 12;
  }
function calcularEnergia() {
    const modulo = proposta.modulo;
    const placas = Number(proposta.placas);
    const hsp = Number(proposta.hsp);

    if (modulo === "575Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 575 * 30 * 0.8) / 1000) * placas;
    }
    if (modulo === "585Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 585 * 30 * 0.8) / 1000) * placas;
    }
     if (modulo === "615Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 615 * 30 * 0.8) / 1000) * placas;
    }
    if (modulo === "610Wp Tier 1") {
      return  proposta.energiaGerada = Number((hsp * 610 * 30 * 0.8) / 1000) * placas;
    }
    if (modulo === "700Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 700 * 30 * 0.8) / 1000) * placas;
    }
  }
function contaComSiltech() {
    const instalacao = proposta.instalacao;

    if (instalacao === "Bifásico") {
      return proposta.contaComSiltech = 80;
    }

    if (instalacao === "Trifásico") {
      return proposta.contaComSiltech = 130;
    }

  }
function contaSemSiltech() {
    const custoEnergia = Number(proposta.precoKwh);

    return proposta.contaSemSiltech = calcularEnergia() * custoEnergia;
  }
