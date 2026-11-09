    
    
    function atualizarResumoNegociacao(){

      attResumoDesconto()
      attResumoValorPagamento1()
      attResumoValorPagamento2()
      attResumoTipoPagamento1()
      attResumoTipoPagamento2()
      attQtdParcelas1()
      attQtdParcelas2()
      attValorNegociado()
      attResumoMcs()
      attResultado()
    }
    function attResumoDesconto(){

  
      const resumoDescontoNegociacao = document.getElementById('desconto-resumo-negociacao')

      resumoDescontoNegociacao.textContent = negociacao.desconto.toFixed(1) + "%"

    }
    function attResumoValorPagamento1(){

      const resumoValorPagamento1 = document.getElementById('valor-1-resumo-negociacao')

      resumoValorPagamento1.textContent = formatarMoeda(negociacao.valorPagamento1)
    }
    function attResumoValorPagamento2(){

      const resumoValorPagamento2 = document.getElementById('valor-2-resumo-negociacao')

      resumoValorPagamento2.textContent = formatarMoeda(negociacao.valorPagamento2)

    }
    function attResumoTipoPagamento1(){
      const resumoFormaPagamento1 = document.getElementById('forma-1-pagamento-resumo-negociacao')
      
      
      resumoFormaPagamento1.textContent = negociacao.tipoPagamento1
    }
    function attResumoTipoPagamento2(){
      const resumoFormaPagamento2 = document.getElementById('forma-2-pagamento-resumo-negociacao')

      if(negociacao.formaDePagamento2 === 'Á vista'){

        negociacao.parcelasPagamento2 = "Á vista"
      }

      resumoFormaPagamento2.textContent = negociacao.tipoPagamento2
    }
    function attQtdParcelas1(){
      const resumoQtdParcelas1 = document.getElementById('parcelas-1-resumo-negociacao')
      const pagamento = negociacao.tipoPagamento1

      if(pagamento === 'Á vista'){

        resumoQtdParcelas1.textContent = "Á vista"
      }
      else {

        resumoQtdParcelas1.textContent = negociacao.parcelasPagamento1
      }
      
      
    }
     function attQtdParcelas2(){
      const resumoQtdParcelas2 = document.getElementById('parcelas-2-resumo-negociacao')
      const pagamento = negociacao.tipoPagamento2

      if(pagamento === 'Á vista'){

        resumoQtdParcelas2.textContent = "Á vista"
      }
      else {

        resumoQtdParcelas2.textContent = negociacao.parcelasPagamento2
      }
      
    }
  
    function attResumoMcs(){
    const resumoMcsNegociacao = document.getElementById('mcs-resumo-negociacao')

      resumoMcsNegociacao.textContent = negociacao.resultadoMcsNegociado.toFixed(1) + "%"

    }
    function attValorNegociado(){

      const resumoValorNegociadoNegociacao = document.getElementById('valor-negociado-resumo-negociacao')

      resumoValorNegociadoNegociacao.textContent = formatarMoeda(negociacao.valorNegociado)
    }
    function attResultado(){

      const resumoResultadoNegociacao = document.getElementById('resultado-mcs-resumo-negociacao')

      resumoResultadoNegociacao.textContent = negociacao.resultadoAnalise
    }
   