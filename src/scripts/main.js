document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    //navegação

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        console.log(posicaoAtual)

        if(posicaoAtual < alturaHero){
            ocultaElementosHeader()
        }else{
            exibeElementosHeader()
        }
    })

    //seção de atracoes, programação das abas
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            ocultaAbas()
            removeBotaoAtivo()
            aba.classList.add('shows__list--is-active')
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //seção FAQ, accordion

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaRespostas)
    }
})

function ocultaElementosHeader(){
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}
function exibeElementosHeader(){
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

function abreOuFechaRespostas(elemento){
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)

}

function ocultaAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function removeBotaoAtivo(){

    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}