import { Game } from "./game.js";
// import { Column } from "./column.js";

let game = undefined;

const updateUi = () => {
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    const target = document.getElementById('click-targets');

    if (game === undefined) {
        boardHolder.classList.add('class', 'is-invisible');
    } else {
        boardHolder.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();

        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 6; j++) {

                const columnId = document.getElementById(`column-${j}`);
                if (game.isColumnFull(j)) {
                    columnId.classList.add('full')
                } else {
                    columnId.classList.remove('full')
                }
                const square = document.getElementById(`square-${i}-${j}`);
                square.innerHTML = ''
                const player = game.getTokenAt(i, j);

                if (player === 1) {
                    const piece = document.createElement('div');
                    piece.setAttribute('class', 'token black');
                    square.appendChild(piece);
                } else if (player === 2) {
                    const piece = document.createElement('div');
                    piece.setAttribute('class', 'token red');
                    square.appendChild(piece);
                }
            }
        }
        if (game.currentPlayer === 1) {
            target.setAttribute('class', 'black');
        } else {
            target.setAttribute('class', 'red');
        }
    }
};

window.addEventListener('DOMContentLoaded', event => {

    const player1 = document.getElementById("player-1-name");
    const player2 = document.getElementById("player-2-name");
    const formHolder = document.getElementById("form-holder");
    const newGame = document.getElementById("new-game");
    const targets = document.getElementById('click-targets');

    formHolder.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            newGame.removeAttribute('disabled');
        }
    })

    newGame.addEventListener('click', event => {
        game = new Game(player1.value, player2.value);
        player1.value = '';
        player2.value = '';
        newGame.setAttribute('disabled', true);
        // targets.classList.remove('full');
        // targets.childNodes.classList.remove('full');
        updateUi();
    })

    let currentColumn = '';
    targets.addEventListener('click', event => {
        let currentColumn = event.target.id[7];
        if (!event.target.id.startsWith('column-') || game.isColumnFull(currentColumn)) {
            event.preventDefault();
            return;
        }
        currentColumn = parseInt(currentColumn);
        game.playInColumn(currentColumn);
        updateUi();
    })
})











/*

the graveyard
    // const targets = document.getElementById('click-targets');
    // let turns = game.turns;

    // let currentPlayer = 'black';
    // targets.setAttribute('class', currentPlayer);
    turns = game.turns;
        if (game.currentPlayer === 1) {
            piece.setAttribute('class', 'token black');
            target.setAttribute('class', 'red');
        } else {
            piece.setAttribute('class', 'token red');
            target.setAttribute('class', 'black');
        }
        let columns = {
        column0: 5,
        column1: 5,
        column2: 5,
        column3: 5,
        column4: 5,
        column5: 5,
        column6: 5
    }
    let column = event.target.id.replace('-', '');
    currentColumn = event.target.id[7];

    let row = columns[column];
    let id = `square-${row}-${currentColumn}`;

    const piece = document.createElement('div');
    piece.setAttribute('class', `token ${currentPlayer}`);

    let board = document.getElementById(id);

    board.appendChild(piece);
    columns[column]--;
    handleRow();

    turns++;
    playInColumn()
    if (turns % 2 !== 0) {
        currentPlayer = 'red';
    } else {
        currentPlayer = 'black';
    }
    targets.setAttribute('class', currentPlayer);

    if (columns[column] === -1) {
        event.target.setAttribute('class', 'click-target full');
    }
        if (turns % 2 !== 0) {
        currentPlayer = 'red';
    } else {
        currentPlayer = 'black';

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
