function inserirValorNegociado(){

    
  


    const valorNegociado = document.getElementById('valor-negociado-proposta') 

    negociacao.valorNegociado = valorNegociado.value

    return negociacao.valorNegociado
}   

function inserirPagamento1(){

    const pagamento = document.getElementById('valor-pagamento-1')

    negociacao.valorPagamento1 = pagamento.value

    return negociacao.valorPagamento1
}

function inserirTipoPagamento1(){

    const tipoPagamento = document.getElementById('forma-pagamento-1-negociacao')

    negociacao.tipoPagamento1 = tipoPagamento.value

    return negociacao.tipoPagamento1
}

function inserirParcelas1(){

    const parcelas = document.getElementById('parcela-pagamento-1-negociacao')

    negociacao.parcelasPagamento1 = parcelas.value

    return negociacao.parcelasPagamento1
}

function inserirPagamento2(){

    const valor = document.getElementById("valor-negociado-proposta")
    const pagamento1 = document.getElementById("valor-pagamento-1")

    let pagamento2 = valor.value - pagamento1.value

    negociacao.valorPagamento2 = pagamento2

    return negociacao.valorPagamento2

  
}

function inserirTipoPagamento2(){

    const tipoPagamento = document.getElementById('forma-pagamento-2-negociacao')

    negociacao.tipoPagamento2 = tipoPagamento.value

    return negociacao.tipoPagamento2
}

function inserirParcelas2(){

    const parcelas = document.getElementById('parcela-pagamento-2-negociacao')

    negociacao.parcelasPagamento2 = parcelas.value

    return negociacao.parcelasPagamento2
}
function inserirDesconto(){

    const desconto = document.getElementById('desconto-negociacao-proposta')

    desconto.textContent = negociacao.desconto.toFixed(1) + "%"

}
function inserirTaxaCartao(){

    
}
function inserirResultadoMcsNegociado(){

    const resultadoMcs = document.getElementById('mcs-negociacao')

    resultadoMcs.textContent = negociacao.resultadoMcsNegociado.toFixed(2) + "%"

}
function inserirResultadoAnalise(){

    const resultadoAnalise = document.getElementById('texto-mcs-negociacao')

    resultadoAnalise.textContent = negociacao.resultadoAnalise  

}
function alterarCorResultado(){

    const container = document.getElementById('container-item-analise');
    const titulo = document.getElementById('titulo-resultado-negociacao');
    const icone = document.getElementById('icone-resultado-negociacao');
    const texto = document.getElementById('texto-mcs-negociacao');

    const resultado = negociacao.resultadoAnalise  

    if (resultado === "Aprovado"){

        container.classList.remove('background-gray');

        icone.classList.replace('bi-emoji-expressionless','bi-emoji-smile')
        icone.classList.replace('bi-emoji-frown','bi-emoji-smile')
        icone.classList.replace('bi-emoji-surprise','bi-emoji-smile')

        container.classList.remove('background-red');
        container.classList.remove('background-yellow');

        titulo.classList.remove('color-red')
        titulo.classList.remove('color-yellow')

        icone.classList.remove('color-red')
        icone.classList.remove('color-yellow')

        texto.classList.remove('color-red')
        texto.classList.remove('color-yellow')

        container.classList.add('background-green')
        titulo.classList.add('color-green')
        icone.classList.add('color-green')
        texto.classList.add('color-green')

        return

    }

     if (resultado === "Reprovado"){

        container.classList.remove('background-gray');
        icone.classList.replace('bi-emoji-expressionless','bi-emoji-frown')
        icone.classList.replace('bi-emoji-smile','bi-emoji-frown')
        icone.classList.replace('bi-emoji-surprise','bi-emoji-frown')


        container.classList.remove('background-green');
        container.classList.remove('background-yellow');

        titulo.classList.remove('color-green')
        titulo.classList.remove('color-yellow')

        icone.classList.remove('color-green')
        icone.classList.remove('color-yellow')
        
        texto.classList.remove('color-green')
        texto.classList.remove('color-yellow')

        container.classList.add('background-red')
        titulo.classList.add('color-red')
        icone.classList.add('color-red')
        texto.classList.add('color-red')
        
        return

    } if (resultado === "Autorização"){

        container.classList.remove('background-gray');
        icone.classList.replace('bi-emoji-expressionless','bi-emoji-surprise')
         icone.classList.replace('bi-emoji-frown','bi-emoji-surprise')
          icone.classList.replace('bi-emoji-smile','bi-emoji-surprise')
        
        container.classList.remove('background-green');
        container.classList.remove('background-red');
       
        titulo.classList.remove('color-green')
        titulo.classList.remove('color-red')

        icone.classList.remove('color-green')
        icone.classList.remove('color-red')

        texto.classList.remove('color-green')
        texto.classList.remove('color-red')

        container.classList.add('background-yellow')
        titulo.classList.add('color-yellow')
        icone.classList.add('color-yellow')
        texto.classList.add('color-yellow')

        return
    }


}
function mostrarPagamento2(){

    const campo = document.getElementById("valor-pagamento-2")

    campo.textContent = negociacao.valorPagamento2


}
