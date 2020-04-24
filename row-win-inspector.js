export class RowWinInspector {
    constructor(columns) {
        this.columns = columns;
    }
    inspect(boardRow) {
        if (boardRow.includes('1111')) {
            return 1;
        } else if (boardRow.includes('2222')) {
            return 2;
        } else {
            return 0;
        }
    }
}
