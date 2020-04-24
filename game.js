import { Column } from './column.js';
import { ColumnWinInspector } from './column-win-inpector.js'
import { RowWinInspector } from './row-win-inspector.js'

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
        } else if (this.winnerNumber === 2) {
            return `${this.player2} is the WINNER!!!`;
        } else if (this.winnerNumber === 1) {
            return `${this.player1} is the WINNER!!!`;
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
        this.checkForColumnWin();
        this.checkForRowWin();
    }
    getTokenAt(row, column) {
        return this.columns[column].getTokenAt(row);
    }
    isColumnFull(column) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[column].isFull();
    }
    checkForTie() {
        if (this.columns.every(column => column.isFull())) {
            this.winnerNumber = 3;
        }
    }
    checkForColumnWin() {
        //loop i through 0-6
        for (let i = 0; i <= 6; i++) {
            const columnCheck = new ColumnWinInspector(this.columns[i]);
            const result = columnCheck.inspect()
            if (result > 0) {
                this.winnerNumber = result;
                return;
            }
        }
    }
    checkForRowWin() {
        //new RowWinInspector

        const rowCheck = new RowWinInspector(this.columns);
    }
}
