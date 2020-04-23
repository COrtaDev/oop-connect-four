export class Game {
    constructor(turns, player1, player2, ) {
        this.turns = turns;
        this.player1 = player1;
        this.player2 = player2;

    }
    getName() {
        return `${this.player1} vs ${this.player2}`;
    }
}

// module.exports = {
//     Game,
// };
