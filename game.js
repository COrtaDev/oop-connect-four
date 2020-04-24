import { Column } from './column.js';

export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [
            new Column('0'),
            new Column('1'),
            new Column('2'),
            new Column('3'),
            new Column('4'),
            new Column('5'),
            new Column('6')
        ];
        this.winnerNumber = 0;
    }
    getName() {
        if (this.winnerNumber === 3) {
            //prevent UI from updating
            return `${this.player1} ties with ${this.player2}!`;
        }
        return `${this.player1} vs ${this.player2}`;
    }
    playInColumn(column) {
        let i = column;
        this.columns[i].add(this.currentPlayer);

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
    }
    getTokenAt(row, column) {
        return this.columns[column].getTokenAt(row);
    }
    isColumnFull(column) {
        return this.columns[column].isFull();
    }
    checkForTie() {
        if (this.columns.every(column => column.isFull())) {
            this.winnerNumber = 3;
        }
    }
}
