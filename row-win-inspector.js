export class RowWinIspector {
    constructor(columns) {
        this.columns = columns;
        /*
        this.columns = [
            new Column('0'), i = 0
            new Column('1'),
            new Column('2'),
            new Column('3'),
            new Column('4'),
            new Column('5'),
            new Column('6')
        ];
        */
    }
    inspect() {
        for (let i = 0; i <= 6; i++) {
            const rowCheck = this.columns[i, 5]
            let boardRow = '';
            if (rowCheck !==) {
                boardRow += rowCheck;
            } else {
                boardRow += 'x';
            }
        }
    }
}
