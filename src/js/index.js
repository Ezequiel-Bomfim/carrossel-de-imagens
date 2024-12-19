const slide = document.querySelectorAll('.slide')

const setaVoltar = document.querySelector('.seta-voltar')
const setaAvancar = document.querySelector('.seta-avancar')

let slideAtual = 0

setaAvancar.addEventListener('click', () =>{
    if(slideAtual === slide.length - 1){
        return;
    }

    esconderConteudoDoSite()
    slideAtual ++

    mostrarConteudo()
    mostrarOuEsconderSetas()
})

setaVoltar.addEventListener('click', () =>{
    if(slideAtual === 0){
        return;
    }

    esconderConteudoDoSite()
    slideAtual--

    mostrarConteudo()
    mostrarOuEsconderSetas()
})

function mostrarConteudo(){
    slide[slideAtual].classList.add('mostrar')
}

function esconderConteudoDoSite(){
    let conteudoDisponivel = document.querySelector('.mostrar')
    conteudoDisponivel.classList.remove('mostrar')
}

function mostrarOuEsconderSetas(){
    const naoEhOPrimeiroSlide = slideAtual !== 0

    if(naoEhOPrimeiroSlide){
        setaVoltar.classList.remove('opacidade')
    }else{
        setaVoltar.classList.add('opacidade')
    }

    const chegouNoUltimoSlide = slideAtual !== 0 && slideAtual === slide.length -1

    if(chegouNoUltimoSlide){
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove('opacidade')
    }
}