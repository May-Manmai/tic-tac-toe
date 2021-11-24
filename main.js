const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;

const jackpot = document.querySelector('.boxes');

function clickEvent(event) {
    if (currentPlayer === playerOne) {
        event.target.textContent = currentPlayer;
        event.target.style.backgroundColor = 'red';
    } else {
        event.target.textContent = currentPlayer;
        event.target.style.backgroundColor = 'yellow';
    }

    checkJackpot();
    switchPlayer();
}

jackpot.addEventListener('click', clickEvent);

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
        allBoxes[0].textContent === allBoxes[1].textContent &&
        allBoxes[1].textContent === allBoxes[2].textContent
    ) {
        result(currentPlayer);
    } else if (
        allBoxes[3].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[5].textContent
    ) {
        result(currentPlayer);
    } else if (
        allBoxes[6].textContent === allBoxes[7].textContent &&
        allBoxes[7].textContent === allBoxes[8].textContent
    ) {
        result(currentPlayer);
    } else if (
        allBoxes[0].textContent === allBoxes[3].textContent &&
        allBoxes[3].textContent === allBoxes[6].textContent
    ) {
        result(currentPlayer);
    } else if (
        allBoxes[1].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[7].textContent
    ) {
        result(currentPlayer);
    } else if (
        allBoxes[2].textContent === allBoxes[5].textContent &&
        allBoxes[5].textContent === allBoxes[8].textContent
    ) {
        result(currentPlayer);
    } else if (
        allBoxes[0].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[8].textContent
    ) {
        result(currentPlayer);
    } else if (
        allBoxes[2].textContent === allBoxes[4].textContent &&
        allBoxes[4].textContent === allBoxes[6].textContent
    ) {
        result(currentPlayer);
    }
}

function result(player) {
    if (player === playerOne) {
        document.querySelector('.display').innerHTML =
            'Player One is the winner!';
    } else if (player === playerTwo) {
        document.querySelector('.display').innerHTML =
            'Player Two is the winner!';
    }
    // console.log(player);

    jackpot.removeEventListener('click', clickEvent);
}

const restart = document.querySelector('.restart');

restart.addEventListener('click', function () {
    window.location.reload();
    return false;
});
