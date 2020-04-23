window.addEventListener('DOMContentLoaded', event => {

    const targets = document.getElementById('click-targets');
    let turns = 0;
    let currentPlayer = 'black';
    targets.setAttribute('class', currentPlayer);
    let currentColumn = '';
    targets.addEventListener('click', event => {
        currentColumn = event.target.id[7];
        turns++;
        if (turns % 2 !== 0) {
            currentPlayer = 'red';
        } else {
            currentPlayer = 'black';
        }
        targets.setAttribute('class', currentPlayer);
        console.log(turns);
        console.log(currentColumn);
    })

})










/*

the graveyard

*/
