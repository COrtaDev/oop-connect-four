export class Game {
    constructor(turns, player1, player2, currentPlayer, ) {
        this.turns = turns;
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = currentPlayer;

    }
    getName() {
        return `${this.player1} vs ${this.player2}`;
    }
    playInColumn() {
        if (this.currentPlayer === 1) {
            return 2;
        } else {
            return 1;
        }
    }
}
