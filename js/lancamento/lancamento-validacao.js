function validarVazioLancamento(){

    const mensagemError = document.getElementById('mensagem-erro-lancamento')

    const nomeLancamento = document.getElementById('input-cliente-lancamento')
    const containerNomeLancamento = document.getElementById('container-nome-lancamento')

    const cpfLancamento = document.getElementById('input-cpf-lancamento')
    const containerCpfLancamento = document.getElementById('container-cpf-lancamento')

    const contatoLancamento = document.getElementById('input-contato-lancamento')
    const containerContatoLancamento = document.getElementById('container-contato-lancamento')
    
    const rgLancamento = document.getElementById('input-rg-lancamento')
    const containerRgLancamento = document.getElementById('container-rg-lancamento')

    const emailLancamento = document.getElementById('input-e-mail-lancamento')
    const containerEmailLancamento = document.getElementById('container-email-lancamento')

    const cepLancamento = document.getElementById('input-cep-lancamento')
    const containerCepLancamento = document.getElementById('container-cep-lancamento')

    const ruaLancamento = document.getElementById('input-rua-lancamento')
    const containerRuaLancamento = document.getElementById('container-rua-lancamento')

    const bairroLancamento = document.getElementById('input-bairro-lancamento')
    const containerBairroLancamento = document.getElementById('container-bairro-lancamento')

    const numeroLancamento = document.getElementById('input-numero-lancamento')
    const containerNumeroLancamento = document.getElementById('container-numero-lancamento')

    const cidadeLancamento = document.getElementById('input-cidade-lancamento')
    const containerCidadeLancamento = document.getElementById('container-cidade-lancamento')

    const ufLancamento = document.getElementById('input-estado-lancamento')
    const containerUfLancamento = document.getElementById('container-uf-lancamento')

    const numeroInstalacaoLancamento = document.getElementById('input-numero-instalacao-lancamento')
    const containerNumeoInstalacaoLancamento = document.getElementById('container-numero-instalacao-lancamento')

    const sdrLancamento = document.getElementById('input-sdr-lancamento')
    const containerSdrLancamento = document.getElementById('container-sdr-lancamento')

    const closerLancamento = document.getElementById('input-closer-lancamento')
    const containerCloserLancamento = document.getElementById('container-closer-lancamento')

    const buLancamento = document.getElementById('input-bu-lancamento')
    const containerBuLancamento = document.getElementById('container-bu-lancamento')

    const canalVendasLancamento = document.getElementById('input-canal-lancamento')
    const containerCanalVendasLancamento = document.getElementById('container-canal-vendas-lancamento')

    const concessionariaLancamento = document.getElementById('input-concessionaria-lancamento')
    const containerConcessionariaLancamento = document.getElementById('container-concessionaria-lancamento')

    const unidadeLancamento = document.getElementById('input-unidade-lancamento')
    const containerUnidadeLancamento = document.getElementById('container-unidade-lancamento')





    if (nomeLancamento.value === ""){

        containerNomeLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')

        return "Sim"
    }
     if (cpfLancamento.value === ""){

        containerCpfLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
    if (contatoLancamento.value === ""){

        containerContatoLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
    if (contatoLancamento.value === ""){

        containerContatoLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (rgLancamento.value === ""){

        containerRgLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (contatoLancamento.value === ""){

        containerContatoLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (emailLancamento.value === ""){

        containerEmailLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (cepLancamento.value === ""){

        containerCepLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (ruaLancamento.value === ""){

        containerRuaLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (bairroLancamento.value === ""){

        containerBairroLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (numeroLancamento.value === ""){

        containerNumeroLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (cidadeLancamento.value === ""){

        containerCidadeLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (ufLancamento.value === ""){

        containerUfLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
     if (numeroInstalacaoLancamento.value === ""){

        containerNumeoInstalacaoLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
    if (sdrLancamento.value === ""){

        containerSdrLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
      if (closerLancamento.value === ""){

        containerCloserLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
      if (buLancamento.value === ""){

        containerBuLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
      if (canalVendasLancamento.value === ""){

        containerCanalVendasLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
    if (concessionariaLancamento.value === ""){

        containerConcessionariaLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }
    if (unidadeLancamento.value === ""){

        containerUnidadeLancamento.classList.add('erro-borda')
        mensagemError.classList.remove('hidden')
        
        return "Sim"
    }


}

function limparCamposLancamento(){

    const mensagemError = document.getElementById('mensagem-erro-lancamento')

    const containerNomeLancamento = document.getElementById('container-nome-lancamento')
    const containerCpfLancamento = document.getElementById('container-cpf-lancamento')
    const containerContatoLancamento = document.getElementById('container-contato-lancamento')  
    const containerRgLancamento = document.getElementById('container-rg-lancamento')
    const containerEmailLancamento = document.getElementById('container-email-lancamento')
    const containerCepLancamento = document.getElementById('container-cep-lancamento')
    const containerRuaLancamento = document.getElementById('container-rua-lancamento')
    const containerBairroLancamento = document.getElementById('container-bairro-lancamento')
    const containerNumeroLancamento = document.getElementById('container-numero-lancamento')
    const containerCidadeLancamento = document.getElementById('container-cidade-lancamento')
    const containerUfLancamento = document.getElementById('container-uf-lancamento')
    const containerNumeoInstalacaoLancamento = document.getElementById('container-numero-instalacao-lancamento')
    const containerSdrLancamento = document.getElementById('container-sdr-lancamento')
    const containerCloserLancamento = document.getElementById('container-closer-lancamento')
    const containerBuLancamento = document.getElementById('container-bu-lancamento')
    const containerCanalVendasLancamento = document.getElementById('container-canal-vendas-lancamento')
    const containerConcessionariaLancamento = document.getElementById('container-concessionaria-lancamento')
    const containerUnidadeLancamento = document.getElementById('container-unidade-lancamento')


    containerNomeLancamento.classList.remove('erro-borda')
    containerCpfLancamento.classList.remove('erro-borda')
    containerContatoLancamento.classList.remove('erro-borda')
    containerRgLancamento.classList.remove('erro-borda')
    containerEmailLancamento.classList.remove('erro-borda')
    containerCepLancamento.classList.remove('erro-borda')
    containerRuaLancamento.classList.remove('erro-borda')
    containerBairroLancamento.classList.remove('erro-borda')
    containerNumeroLancamento.classList.remove('erro-borda')
    containerCidadeLancamento.classList.remove('erro-borda')
    containerUfLancamento.classList.remove('erro-borda')
    containerNumeoInstalacaoLancamento.classList.remove('erro-borda')
    containerSdrLancamento.classList.remove('erro-borda')
    containerCloserLancamento.classList.remove('erro-borda')
    containerBuLancamento.classList.remove('erro-borda')
    containerCanalVendasLancamento.classList.remove('erro-borda')
    containerConcessionariaLancamento.classList.remove('erro-borda')
    containerUnidadeLancamento.classList.remove('erro-borda')

    mensagemError.classList.add('hidden')

}