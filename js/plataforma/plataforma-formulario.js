

    const selecionarTeste = document.getElementById('teste-proposta')

    selecionarTeste.addEventListener('change', mostrarCanal)

    function mostrarCanal(){

        const canalContainerProposta = document.getElementById('canal-container-proposta')

        if(selecionarTeste.value === "Sim") {

            canalContainerProposta.classList.add('hidden')
        }
        else {

            canalContainerProposta.classList.remove('hidden')
        }
    }

    const selecionarExpansao = document.getElementById('expansao-proposta')

    selecionarExpansao.addEventListener('change', mostrarExpansao)
    function mostrarExpansao(){

        const campoQtdExpansao = document.getElementById('container-qtd-expansao-proposta')

        if(selecionarExpansao.value === "Sim") {

            campoQtdExpansao.classList.remove('hidden')
        } 
        else {
            campoQtdExpansao.classList.add('hidden')
        }
    }


function esconderPlataforma(){

    const logo = document.querySelector('.logo-plataforma')
    const header = document.querySelector('.header-plataforma')
    const nav = document.querySelector('.navegacao-plataforma')
    const user = document.querySelector('.usuario-plataforma')
    const config = document.querySelector('.configuracao-plataforma')
    const main = document.querySelector('.main-plataforma')

    header.classList.add('hidden')
    logo.classList.add('hidden')
    nav.classList.add('hidden')
    user.classList.add('hidden')
    config.classList.add('hidden')

    main.classList.add('mudarGrid')
}
function mostrarPlataforma(){

    const logo = document.querySelector('.logo-plataforma')
    const header = document.querySelector('.header-plataforma')
    const nav = document.querySelector('.navegacao-plataforma')
    const user = document.querySelector('.usuario-plataforma')
    const config = document.querySelector('.configuracao-plataforma')
    const main = document.querySelector('.main-plataforma')

    header.classList.remove('hidden')
    logo.classList.remove('hidden')
    nav.classList.remove('hidden')
    user.classList.remove('hidden')
    config.classList.remove('hidden')

    main.classList.remove('mudarGrid')
}