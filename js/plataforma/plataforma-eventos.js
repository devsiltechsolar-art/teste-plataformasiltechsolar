
//Código nome proposta
const nomeFormularioProposta = document.getElementById('nome-proposta')
nomeFormularioProposta.addEventListener('input', calcularDados)

//Código telefone proposta
const telefoneFormularioProposta = document.getElementById('telefone-proposta')
telefoneFormularioProposta.addEventListener('input', calcularDados)

//Código para teste de proposta
const testeFormularioProposta = document.getElementById('teste-proposta')

testeFormularioProposta.addEventListener('change', calcularDados)

//Código para canal de vendas
const canalFormularioProposta = document.getElementById('canal-proposta')

canalFormularioProposta.addEventListener('change', calcularDados)
//Código para sistema
const sistemaFormularioProposta = document.getElementById('inversor-proposta')

sistemaFormularioProposta.addEventListener('change', calcularDados)

//Código para modulo
const moduloFormularioProposta = document.getElementById('modulo-proposta')

moduloFormularioProposta.addEventListener('change', calcularDados)

//Código para promoção

const promocaoFormularioProposta = document.getElementById('promocao-proposta')

promocaoFormularioProposta.addEventListener('input', calcularDados)

//Código gerar quantidade de placas

const consumoPlacas = document.getElementById('consumo-placa-proposta')

consumoPlacas.addEventListener('input',() =>{

    consumoEnergia.value = ""
    calcularDados()
} )


const consumoEnergia = document.getElementById('consumo-energia-proposta')

consumoEnergia.addEventListener('input', () =>{

    consumoPlacas.value = ""
    calcularDados()
    })

//Código para gerar expansão

const expansaoFormularioProposta = document.getElementById('expansao-proposta')
const campoQtdExpansao = document.getElementById('container-qtd-expansao-proposta')

expansaoFormularioProposta.addEventListener('change', calcularDados)


//Código cquantidade de placas expansivas.

const qtdExpansaoFormularioProposta = document.getElementById('qtd-expansao-proposta')

qtdExpansaoFormularioProposta.addEventListener('input', calcularDados)


//Código para preco do kWh

const precoKwhFormularioProposta = document.getElementById('preco-kwh-proposta')

precoKwhFormularioProposta.addEventListener('input', calcularDados)


//Código para instalacao

const instalacaoFormularioProposta = document.getElementById('instalacao-proposta')

instalacaoFormularioProposta.addEventListener('change', calcularDados)

//Código para telhado

const telhadoFormularioProposta = document.getElementById('telhado-proposta')

telhadoFormularioProposta.addEventListener('change', calcularDados)


///////////////////////////////////////////////////////////////////

