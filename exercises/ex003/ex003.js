let exeButton = document.getElementById('exe-button')

exeButton.addEventListener('click', () => {
    let num1 = window.prompt('Digite um número inteiro: ') // prompts always return strings. If you want to work with numbers, you'll need to parse it
    let num2 = window.prompt('Digite outro número inteiro: ')

    num1 = Number.parseInt(num1)
    num2 = Number.parseInt(num2)

    let soma = num1 + num2

    window.alert(`A soma dos valores ${num1} e ${num2} é ${soma}`)
})