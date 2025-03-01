const inputNota = document.querySelector('#main-content label input')
const btnVerificarNota = document.querySelector('#main-content button')
const output = document.querySelector('#output')

// utilizando condições aninhadas em javascript
btnVerificarNota.addEventListener('click', () => {
    output.classList = ''

    if(inputNota.value.trim() === '') {
        output.textContent = 'Insira sua nota para verificar.'
        output.classList.add('invalido')
        output.classList.add('show')
        return
    }

    const nota = Number.parseFloat(inputNota.value.trim())

    if(nota < 5) {
        output.textContent = 'Lamentamos... Mas você se encontra reprovado.'
        output.classList.add('reprovado')
    } else if(nota < 7) {
        output.textContent = 'Você ainda não está aprovado. Mas não se preocupe! Você poderá fazer a recuperação. Boa sorte!'
        output.classList.add('recuperacao')
    } else {
        output.textContent = 'Seu esforço valeu a pena! Você está aprovado!'
        output.classList.add('aprovado')
    }

    output.classList.add('show')
})