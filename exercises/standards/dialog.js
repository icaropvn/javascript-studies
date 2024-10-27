let explainingDialog = document.getElementById('explain-code-dialog')
let openDialogButton = document.getElementById('open-dialog-button')
let closeDialogButton = document.getElementById('close-dialog-button')

openDialogButton.addEventListener('click', () => {
    explainingDialog.showModal()
})

closeDialogButton.addEventListener('click', ()  => {
    explainingDialog.close()
})