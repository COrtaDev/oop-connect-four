window.addEventListener('DOMContentLoaded', event => {

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










/*

the graveyard

*/
