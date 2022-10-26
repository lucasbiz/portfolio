const men = document.getElementById('nav')
const html = document.getElementById('txthtml')
const css = document.getElementById('txtcss')
const js = document.getElementById('txtjs')
const react = document.getElementById('txtreact')
const office = document.getElementById('txtoffice')
const fechamenu = document.getElementById('fechamenu')
const divhtml = document.getElementById('html')
const divcss = document.getElementById('css')
const divjs = document.getElementById('js')
const divreact = document.getElementById('react')
const divoffice = document.getElementById('office')

//ANIMAÇÃO CONHECIMENTOS    

function transicao (botao, texto){
    if (botao.classList == 'buttons'){
        botao.classList.toggle('buttonsActive')
        texto.classList.toggle('active')
    } else{
        botao.classList.remove('buttonsActive')
        texto.classList.remove('active')
    }
}





// MOSTRAR MENU E DEMAIS ITENS ESCONDIDOS

const show = (variavel) => {
    if (variavel.style.display == ''){
        variavel.style.display = 'block'
    } else {
        variavel.style.display = ''
    }
}



//FECHAR MENU CLICANDO FORA DELE

fechamenu.addEventListener('click', closeMenu)
function closeMenu(){
    if(fechamenu.style.display == 'block'){
        men.style.display = ''
        fechamenu.style.display = ''
    }
}

//EASTER EGG

const easteregg = () =>
    alert('Olá! Nesta página existe um Easter Egg, será que você consegue encontrar sem olhar o código fonte? \u{1F440} ')










//SCROLL SUAVE

const menuitens = document.querySelectorAll('#nav a[href^="#"')

menuitens.forEach(item => {
    item.addEventListener('click', scrollonclick)
    item.addEventListener('click', closeMenu)
})

function scrollonclick(event) {
    event.preventDefault()
    const element = event.target
    const section = getscrollontop (event.target) - 80
    scrolltoposition(section)

}

function scrolltoposition(section){
    window.scroll({
        top: section,
        behavior: "smooth"
    })
}

function getscrollontop(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}