const select = document.getElementById('operation-select')
const operationIcon = document.getElementById('operation-icon')
const calculateButton = document.getElementById('calculate-btn')
const numInput1 = document.getElementById('number-input-1')
const numInput2 = document.getElementById('number-input-2')
const resultContainer = document.getElementById('result-container')

function calculate(num1, num2, operation) {
    const operations = {
        addition: (a, b) => a + b,
        subtraction: (a, b) => a - b,
        multiplication: (a, b) => a * b,
        division: (a, b) => a / b
    }

    return operations[operation] ? operations[operation](num1, num2) : 'Error.'
}

select.addEventListener('change', () => {
    const operationIcons = {
        addition: '+',
        subtraction: '-',
        multiplication: '*',
        division: '/'
    }

    operationIcon.textContent = operationIcons[select.value] || '?'
})

calculateButton.addEventListener('click', () => {
    let num1 = Number.parseFloat(numInput1.value)
    let num2 = Number.parseFloat(numInput2.value)

    if(isNaN(num1) || isNaN(num2)) {
        resultContainer.textContent = 'Fulfill the inputs.'
        return
    }

    if(select.value === 'division' && num2 === 0) {
        resultContainer.textContent = 'Invalid operation.' 
        return
    }
    
    let result = calculate(num1, num2, select.value)
    resultContainer.textContent = `${result}`
})

