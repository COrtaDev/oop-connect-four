import { Game } from "./game.js";

let game = undefined;

function updateUi() {
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    if (game === undefined) {
        boardHolder.setAttribute('class', 'is-invisible');
    } else {
        gameName.innerHTML = game.getName();
        boardHolder.removeAttribute('class');
    }
};

window.addEventListener('DOMContentLoaded', event => {

    const player1 = document.getElementById("player-1-name");
    const player2 = document.getElementById("player-2-name");
    const formHolder = document.getElementById("form-holder");
    const newGame = document.getElementById("new-game");

    formHolder.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            newGame.removeAttribute('disabled');
        }
    })

    newGame.addEventListener('click', event => {
        game = new Game(1, player1.value, player2.value);
        player1.value = '';
        player2.value = '';
        newGame.setAttribute('disabled', true);
        updateUi();
    })

    const targets = document.getElementById('click-targets');
    let turns = 0;
    let columns = {
        column0: 5,
        column1: 5,
        column2: 5,
        column3: 5,
        column4: 5,
        column5: 5,
        column6: 5
    }
    let currentPlayer = 'black';
    targets.setAttribute('class', currentPlayer);
    let currentColumn = '';
    targets.addEventListener('click', event => {
        let column = event.target.id.replace('-', '');
        currentColumn = event.target.id[7];
        if (columns[column] === -1) {
            event.preventDefault();
            return;
        }

        if (turns % 2 !== 0) {
            currentPlayer = 'red';
        } else {
            currentPlayer = 'black';
        }
        console.log(turns);
        console.log(currentColumn);


        console.log(column); //'column-0' --> .join('-')
        let row = columns[column];
        console.log(row);
        let id = `square-${row}-${currentColumn}`;

        const piece = document.createElement('div');
        piece.setAttribute('class', `token ${currentPlayer}`);

        let board = document.getElementById(id);

        board.appendChild(piece);
        columns[column]--;
        //handleRow();

        turns++;
        if (turns % 2 !== 0) {
            currentPlayer = 'red';
        } else {
            currentPlayer = 'black';
        }
        targets.setAttribute('class', currentPlayer);
    })


})











/*

the graveyard

    player1.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            newGame.removeAttribute('disabled');
        }
    })
    player2.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            newGame.removeAttribute('disabled');
        }
    })
*/
