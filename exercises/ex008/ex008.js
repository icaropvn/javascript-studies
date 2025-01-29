let tickets = []
let ticketId = 0
let verifyButton = document.querySelector('#verify')
let checkTicketsButton = document.querySelector('#check-tickets')
let closeTicketsDialogButton = document.querySelector('#close-tickets-dialog')

function showNotification(type, message) {
    let notification = document.querySelector('#notification')

    notification.classList.remove('good')
    notification.classList.remove('bad')
    notification.classList.remove('info')

    notification.classList.add(type)
    notification.textContent = message

    notification.classList.remove('hidden')

    setTimeout(() => {
        notification.classList.add('hidden')
    }, 8000)
}

function addTicket(velocity) {
    let fine = (velocity - 80) * 15
    let date = (new Date()).toLocaleDateString('pt-br', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    let ticket = {
        id: ++ticketId,
        infraction: 'Excesso de velocidade',
        date: date,
        fine: fine
    }

    tickets.push(ticket)

    checkTicketsButton.textContent = `Consultar minhas multas (${tickets.length})`
}

verifyButton.addEventListener('click', () => {
    let velocity = Number(document.querySelector('#velocity').value)

    if(velocity <= 0) {
        showNotification('info', 'Insira uma velocidade válida para verificar a multa.')
        return
    }

    if(velocity > 80) {
        addTicket(velocity)
        showNotification('bad', 'Você recebeu uma multa. Consulte suas multas para mais detalhes.')
    }
    else {
        showNotification('good', 'Tudo certo. Você estava dentro do limite de velocidade.')
    }
})

checkTicketsButton.addEventListener('click', () => {
    let ticketsDialog = document.querySelector('#tickets-dialog')
    let ticketsList = document.querySelector('#tickets-list')
    let noTicketMessage = document.querySelector('#no-tickets-msg')

    ticketsList.innerHTML = ''

    if(tickets.length === 0)
        noTicketMessage.style.display = 'flex'
    else {
        noTicketMessage.style.display = 'none'

        tickets.forEach((ticket) => {
            let li = document.createElement('li')
            let div = document.createElement('div')

            let title = document.createElement('span')
            title.classList.add('ticket-title')
            title.textContent = `Multa #${(String(ticket.id)).padStart(3, '0')}`

            let infraction = document.createElement('span')
            infraction.classList.add('ticket-infraction')
            infraction.innerHTML = `<strong>Infração:</strong> ${ticket.infraction}`

            let date = document.createElement('span')
            date.classList.add('ticket-date')
            date.innerHTML = `<strong>Data da multa:</strong> ${ticket.date}`

            let fine = document.createElement('span')
            fine.classList.add('ticket-fine')
            fine.innerHTML = `<strong>Valor a ser pago:</strong> R$${ticket.fine},00`

            div.appendChild(title)
            div.appendChild(infraction)
            div.appendChild(date)
            div.appendChild(fine)
            li.appendChild(div)
            ticketsList.appendChild(li)
        })
    }

    ticketsDialog.showModal()
})

closeTicketsDialogButton.addEventListener('click', () => {
    let ticketsDialog = document.querySelector('#tickets-dialog')

    ticketsDialog.close()
})