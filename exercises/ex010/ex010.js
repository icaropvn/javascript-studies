const inputNumDia = document.querySelector('#main-content label input')
const btnRevelarDia = document.querySelector('#main-content button')
const output = document.querySelector('#output')

// utilizando condições múltiplas em javascript
btnRevelarDia.addEventListener('click', () => {
    output.classList = ''

    const inputValue = Number.parseInt(inputNumDia.value.trim())
    inputNumDia.value = inputValue

    switch(inputValue) {
        case 1:
            output.textContent = 'Domingo'
            break
        case 2:
            output.textContent = 'Segunda'
            break
        case 3:
            output.textContent = 'Terça'
            break
        case 4:
            output.textContent = 'Quarta'
            break
        case 5:
            output.textContent = 'Quinta'
            break
        case 6:
            output.textContent = 'Sexta'
            break
        case 7:
            output.textContent = 'Sábado'
            break;
        default:
            output.textContent = 'Número do dia inválido.'
            output.classList.add('invalido')
            break
    }

    output.classList.add('show')
})