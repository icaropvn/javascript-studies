let div = document.getElementById('example-div')
let clickCounter = 0

function changeDivColor(event) {
    if(event.type === 'mouseover')
        div.classList.add('mouseover')
    else if(event.type === 'mouseout')
        div.classList.remove('mouseover')
}

function addClicksCount() {
    let clickText = document.getElementById('clicksText')
    clickText.textContent = `Clicks: ${++clickCounter}`

    if(clickCounter > 0)
        clickText.style.display = 'block'

    if(clickCounter === 100)
        window.alert('100 clicks?? Como chegamos aqui?')

    if(clickCounter === 200)
        window.alert('Uau! Você é realmente determinado! 200 clicks não é pouca coisa.')
}

div.addEventListener('mouseover', changeDivColor)
div.addEventListener('mouseout', changeDivColor)
div.addEventListener('click', addClicksCount)
