let exeButton = document.getElementById('exe-button')
let explainingDialog = document.getElementById('explain-code-dialog')
let openDialogButton = document.getElementById('open-dialog-button')
let closeDialogButton = document.getElementById('close-dialog-button')

let backdrop = document.createElement('div')
backdrop.id = 'backdrop'
document.body.appendChild(backdrop)

exeButton.addEventListener('click', () => {
    window.alert('My first JS message!')
    // OR JUST alert('My First JS message!')

    window.confirm('Are you liking this website?')
    window.prompt('Write your name here, please!')
    window.alert('Thanks!')
})

openDialogButton.addEventListener('click', () => {
    explainingDialog.showModal()
    backdrop.style.display = 'block'
})

closeDialogButton.addEventListener('click', ()  => {
    explainingDialog.close()
    backdrop.style.display = 'none'
})