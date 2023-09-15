let player = {
    Name: 'Eric',
    Chips: 145
    
}
let cards = []
let sum = 0
let blackJack = false
let isAlive = false
let message = ' '
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
playerEl.innerText = player.Name + ": $" + player.Chips

function randomCard() {
    let number = Math.floor(Math.random() * 11) + 1
    return number
}

function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
} 

function renderGame() {
    sumEl.innerHTML = 'Sum: ' + sum
    cardsEl.innerText = 'Cards: '

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerText += ' ' + cards[i]
    }

    if(sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'You Win'
        blackJack = true
    } else {
        message = 'You lose'
        isAlive = false
    } 
    messageEl.innerText = message
}   

function newCard() {
    if (isAlive === true && blackJack === false) {
        let card = randomCard()
        sum += card 
        cards.push(card)
        renderGame()
    }
}