

function calcularDados(){


  gerarIdProposta()
  gerarDataProposta()
  gerarColaborador()
  //Inserindo dados na variável Proposta, para calcular posteriormente

  inserirNome()
  inserirTelefone()
  inserirTeste()
  inserirCanal()
  inserirSistema()
  inserirModulo()
  inserirPromocao()
  inserirQuantidade()
  inserirExpansao()
  inserirQtdExpansao()
  inserirPrecoKwh()
  inserirInstalacao()
  inserirTelhado()

  //Calculando dados a partir das variaveis preenchidas na Proposta

  gerarIdProposta() 
  gerarDataProposta()
  gerarArea()

  //Funções para gerar os dados que serão usados para calcular os custos
  
  gerarPotencia()
  gerarInversor()

  //Funções com valores que serão usados para calcular os custos

  valorPlaca()
  valorInversor()
  valorCabos()
  valorEstrutura()
  valorConectores()

  //Funções para calcular os custos
  custoKitGerador() 
  custoTelhado() 
  custoHomologacao() 
  custoInstalacao()
  custoExpansao()
  custoRetorno()
  custoMercadoriaVendida() 

  //Funções para calcular energia e economia

  calcularEnergia() 
  contaComSiltech() 
  contaSemSiltech()
  gerarEconomiaAnual()
  gerarEconomiaEm15Anos()

  //Função para calcular o valor geral da proposta.

  valorFinalProposta() 

  //Função para atualizar o resumo da proposta, com os dados calculados.

  atualizarResumo()

  //Retirar borda de validação

  limparCamposValidados ()

 

}





