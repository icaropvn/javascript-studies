function atualizarHora() {
    const dataAtual = new Date()
    let horas = dataAtual.getHours()
    let minutos = dataAtual.getMinutes()

    document.querySelector('#hora').textContent = `${String(horas).padStart(2, '0')}h${String(minutos).padStart(2, '0')}`

    const background = document.querySelector('#main-content')
    const image = document.querySelector('#dayTimeImg')
    const saudacao = document.querySelector('#saudacao')
    background.classList = ''

    if(horas >= 6 && horas < 12) {
        background.classList.add('morning')
        image.src = 'images/morning.jpg'
        image.alt = 'Imagem que representa o horário da manhã'
        saudacao.textContent = 'Tenha um bom dia!'
    }
    else if(horas >= 12 && horas < 18) {
        background.classList.add('afternoon')
        image.src = 'images/afternoon.jpg'
        image.alt = 'Imagem que representa o horário da tarde'
        saudacao.textContent = 'Tenha uma boa tarde!'
    }
    else {
        background.classList.add('night')
        image.src = 'images/night.jpg'
        image.alt = 'Imagem que representa o horário da noite e madrugada'
        saudacao.textContent = 'Tenha uma boa noite!'
    }
}

// função de atualizar hora é executada a cada um segundo 
setInterval(atualizarHora, 1000)

// função de atualizar hora é automaticamente chamada ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarHora)