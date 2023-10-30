const nameId = document.querySelector('#nameId')
const numberId = document.querySelector('#numberId')
const dateExpId = document.querySelector('#dateExpId')
const monthYear = document.querySelector('#monthYear')
const cvc = document.querySelector('#cvc')

const cardName = document.querySelector('#cardName')
const numberCard = document.querySelector('#numberCard')

nameId.addEventListener('input', (e) => {
    cardName.textContent = e.target.value
})

numberId.addEventListener('input', (e) => {
    numberCard.textContent = e.target.value
})