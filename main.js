const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;
let yourName1 = prompt('You are the player "X"! What is your name?');
let yourName2 = prompt('You are the player "O"! What is your name?');

const jackpot = document.querySelector('.boxes');

function clickEvent(event) {
    if (event.target.textContent != '') {
        return;
    }
    if (currentPlayer === playerOne) {
        event.target.textContent = currentPlayer;
        // event.target.classlist.add('active');
        event.target.style.backgroundColor = '#a45c7b';
    } else {
        event.target.textContent = currentPlayer;
        event.target.style.backgroundColor = 'black';
    }

    checkJackpot();
    switchPlayer();
}

const allBoxes = document.querySelectorAll('.box');
for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', clickEvent);
}

function switchPlayer() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
}

function checkJackpot() {
    const allBoxes = document.querySelectorAll('.box');
    if (
        allBoxes[0].textContent != '' &&
        allBoxes[0].textContent === allBoxes[1].textContent &&
        allBoxes[1].textContent === allBoxes[2].textContent
    ) {
        allBoxes[0].textContent = '👊🤪';
        allBoxes[1].textContent = '👊🤪';
        allBoxes[2].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[3].textContent != '' &&
        allBoxes[3].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[5].textContent
    ) {
        allBoxes[3].textContent = '👊🤪';
        allBoxes[4].textContent = '👊🤪';
        allBoxes[5].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[6].textContent != '' &&
        allBoxes[6].textContent === allBoxes[7].textContent &&
        allBoxes[7].textContent === allBoxes[8].textContent
    ) {
        allBoxes[6].textContent = '👊🤪';
        allBoxes[7].textContent = '👊🤪';
        allBoxes[8].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[0].textContent != '' &&
        allBoxes[0].textContent === allBoxes[3].textContent &&
        allBoxes[3].textContent === allBoxes[6].textContent
    ) {
        allBoxes[0].textContent = '👊🤪';
        allBoxes[3].textContent = '👊🤪';
        allBoxes[6].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[1].textContent != '' &&
        allBoxes[1].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[7].textContent
    ) {
        allBoxes[1].textContent = '👊🤪';
        allBoxes[4].textContent = '👊🤪';
        allBoxes[7].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[2].textContent != '' &&
        allBoxes[2].textContent === allBoxes[5].textContent &&
        allBoxes[5].textContent === allBoxes[8].textContent
    ) {
        allBoxes[2].textContent = '👊🤪';
        allBoxes[5].textContent = '👊🤪';
        allBoxes[8].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[0].textContent != '' &&
        allBoxes[0].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[8].textContent
    ) {
        allBoxes[0].textContent = '👊🤪';
        allBoxes[4].textContent = '👊🤪';
        allBoxes[8].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[2].textContent != '' &&
        allBoxes[2].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[6].textContent
    ) {
        allBoxes[2].textContent = '👊🤪';
        allBoxes[4].textContent = '👊🤪';
        allBoxes[6].textContent = '👊🤪';
        result(currentPlayer);
    } else if (
        allBoxes[0].textContent != '' &&
        allBoxes[1].textContent != '' &&
        allBoxes[2].textContent != '' &&
        allBoxes[3].textContent != '' &&
        allBoxes[4].textContent != '' &&
        allBoxes[5].textContent != '' &&
        allBoxes[6].textContent != '' &&
        allBoxes[7].textContent != '' &&
        allBoxes[8].textContent != ''
    ) {
        alert('How unexpected..');
        document.querySelector('.display').innerHTML = `It's a draw.`;
    }
}

function result(player) {
    if (player === playerOne) {
        if (yourName1 != '' && yourName1 != null) {
            document.querySelector(
                '.display'
            ).innerHTML = `${yourName1} is the winner!`;
            document.querySelector('.display').classList.add('oneWon');
        } else {
            document.querySelector(
                '.display'
            ).innerHTML = `Player "X" is the winner!`;
            document.querySelector('.display').classList.add('oneWon');
        }
    } else if (player === playerTwo) {
        if (yourName2 != '' && yourName2 != null) {
            document.querySelector(
                '.display'
            ).innerHTML = `${yourName2} is the winner!`;
            document.querySelector('.display').classList.add('twoWon');
        } else {
            document.querySelector(
                '.display'
            ).innerHTML = `Player "O" is the winner!`;
            document.querySelector('.display').classList.add('twoWon');
        }
    }

    const allBoxes = document.querySelectorAll('.box');
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].removeEventListener('click', clickEvent);
    }
}

const restart = document.querySelector('.restart');

restart.addEventListener('click', function () {
    window.location.reload();
    return false;
});
