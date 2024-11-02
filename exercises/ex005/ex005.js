let box = document.getElementById('box')
let boxButton = document.getElementsByClassName('box-button')

for(let i=0; i<boxButton.length; i++) {
    boxButton[i].addEventListener('click', () => {
        let id = boxButton[i].id

        if(id == 'blue')
            box.style.backgroundColor = '#516af5'
        else if(id == 'red')
            box.style.backgroundColor = '#f5517a'
        else
            box.style.backgroundColor = '#56b873'
    })
}