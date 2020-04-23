let game = undefined;

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
    })

    const targets = document.getElementById('click-targets');
    let turns = 0;
    // let row = 4; // let row = columns.id; //columns.id--;
    let columns = {
        column0: 5,//start this at 5 //if(columns[column] === -1){return}
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

class Game {
    constructor(turns, player1, player2, ) {
        this.turns = turns;
        this.player1 = player1;
        this.player2 = player2;

    }
}










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
