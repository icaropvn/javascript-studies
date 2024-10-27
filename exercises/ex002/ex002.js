let exeButton = document.getElementById('exe-button')

exeButton.addEventListener('click', () => {
    let nome = window.prompt('Tell me your name!')
    window.alert('Nice to meet you, ' + nome + '!')
})