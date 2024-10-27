let exeButton = document.getElementById('exe-button')
let canva = document.getElementById('canva')

exeButton.addEventListener('click', () => {
    let name = window.prompt('Tell me your name:')

    /*
    Abordagem usando document.write (não recomendável)

    document.write(`<strong>Name:</strong> ${name}<br>`)
    document.write(`<strong>Your name length is:</strong> ${name.length}<br>`)
    document.write(`<strong>Your name in upper case:</strong> ${name.toUpperCase()}<br>`)
    document.write(`<strong>Your name in lower case:</strong> ${name.toLowerCase()}`)
    */

    canva.innerHTML = ''
    canva.style.display = "block"

    canva.insertAdjacentHTML('beforeend', `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Your name length is:</strong> ${name.length}</p>
        <p><strong>Your name in upper case:</strong> ${name.toUpperCase()}</p>
        <p><strong>Your name in lower case:</strong> ${name.toLowerCase()}</p>
    `)
})