import { Game } from "./game.js";

let game = undefined;
let turns = 0;

function updateUi() {
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    const piece = document.createElement('div');

    if (game === undefined) {
        boardHolder.setAttribute('class', 'is-invisible');
    } else {
        gameName.innerHTML = game.getName();
        boardHolder.removeAttribute('class');
        turns = game.turns;
        game.currentPlayer = game.playInColumn();
        if (game.currentPlayer === 1) {
            piece.setAttribute('class', 'token black');
            targets.setAttribute('class', 'red');
        } else {
            piece.setAttribute('class', 'token red');
            targets.setAttribute('class', 'black');
        }
        board.appendChild(piece);
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
        game = new Game(1, player1.value, player2.value, 1);
        player1.value = '';
        player2.value = '';
        newGame.setAttribute('disabled', true);
        updateUi();
    })

    // const targets = document.getElementById('click-targets');
    // let turns = game.turns;
    let columns = {
        column0: 5,
        column1: 5,
        column2: 5,
        column3: 5,
        column4: 5,
        column5: 5,
        column6: 5
    }
    // let currentPlayer = 'black';
    // targets.setAttribute('class', currentPlayer);
    let currentColumn = '';
    targets.addEventListener('click', event => {
        let column = event.target.id.replace('-', '');
        currentColumn = event.target.id[7];

        // if (turns % 2 !== 0) {
        //     currentPlayer = 'red';
        // } else {
        //     currentPlayer = 'black';
        // }
        // console.log(turns);
        // console.log(currentColumn);


        // console.log(column); //'column-0' --> .join('-')
        let row = columns[column];
        // console.log(row);
        let id = `square-${row}-${currentColumn}`;

        // const piece = document.createElement('div');
        // piece.setAttribute('class', `token ${currentPlayer}`);

        let board = document.getElementById(id);

        board.appendChild(piece);
        columns[column]--;
        //handleRow();

        turns++;
        // playInColumn()
        if (turns % 2 !== 0) {
            currentPlayer = 'red';
        } else {
            currentPlayer = 'black';
        }
        targets.setAttribute('class', currentPlayer);

        if (columns[column] === -1) {
            event.target.setAttribute('class', 'click-target full');
        }
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
