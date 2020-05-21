/* Get the const values */
const totalNumberDice = document.querySelector('.totalDice')
const totalSidesonDice = document.querySelector('.diceSides')
const totalRoll = document.querySelector('.rollResult')
const diceList = document.querySelector('.showDice')
const diceListUpdate = document.querySelector('.diceUlList')
const resetButton = document.querySelector('.resetRolls')
let rollSound = new Audio();
rollSound.src = './assets/sounds/roll-dice.mp3'

/* Roll the Dice Click */
const rollButton = document.querySelector('.rollButton')
let dieRolls = []

let indexRolls = 0

/* roll sound came from http://soundbible.com/181-Roll-Dice-2.html */

rollButton.addEventListener('click', function (){

    /* Play Sound */
    rollSound.play()

    /* Dice Roll Code */

    let numberOfDice = totalNumberDice.value
    let sidesOnDice = totalSidesonDice.value
    let rollResults = 0
    let rollTotal = 0
    let roundResults

    while (indexRolls < numberOfDice) {

        rollResults = Math.random() * (sidesOnDice - 1) + 1

        roundResults = Math.round(rollResults)

        rollTotal = rollTotal + roundResults

        dieRolls.push(roundResults)

        indexRolls += 1
    }
    
    totalRoll.innerHTML = rollTotal
})


/* Show the dice array on page */
diceList.addEventListener('click', function () {
    
    let diceListIndex = 0

    while (diceListIndex < dieRolls.length) {

        let newDiceList = '<li class=\'dice\'>' + dieRolls[diceListIndex] + '</li>'

        diceListUpdate.innerHTML += newDiceList

        diceListIndex += 1
    }
})

/* Reset the Roll */

resetButton.addEventListener('click', function () {
    dieRolls = []
    totalNumberDice.value = ''
    totalSidesonDice.value = ''
    totalRoll.innerHTML = ''
    diceListUpdate.innerHTML = ''
    indexRolls = 0
})
