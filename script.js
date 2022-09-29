const men = document.getElementById('nav')
const html = document.getElementById('txthtml')
const css = document.getElementById('txtcss')
const js = document.getElementById('txtjs')
const react = document.getElementById('txtreact')
const office = document.getElementById('txtoffice')



function menu(){
    if (men.style.display == 'none') {
        men.style.display = 'block'  
    } else {
        men.style.display = 'none'
    }
}

function showhtml(){
    if (html.style.display == 'none') {
        html.style.display = 'block'  
    } else {
        html.style.display = 'none'
    }
}

function showcss(){
    if (css.style.display == 'none') {
        css.style.display = 'block'  
    } else {
        css.style.display = 'none'
    }
}

function showjs(){
    if (js.style.display == 'none') {
        js.style.display = 'block'  
    } else {
        js.style.display = 'none'
    }
}

function showreact(){
    if (react.style.display == 'none') {
        react.style.display = 'block'  
    } else {
        react.style.display = 'none'
    }
}

function showoffice(){
    if (office.style.display == 'none') {
        office.style.display = 'block'  
    } else {
        office.style.display = 'none'
    }
}



function easteregg(){
    alert('Olá! Nesta página existe um Easter Egg, será que você consegue encontrar sem olhar o código fonte? \u{1F440} ')
}


//SCROLL SUAVE

const menuitens = document.querySelectorAll('#nav a[href^="#"')

menuitens.forEach(item => {
    item.addEventListener('click', scrollonclick)
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