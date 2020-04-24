export class ColumnWinInspector {
    constructor(Column) {
        this.Column = Column;
        this.tokens = Column.tokens;
    }
    inspect() {
        let columnString = this.tokens.join('')
        if (columnString.includes('1111')) {
            return 1;
        } else if (columnString.includes('2222')) {
            return 2;
        } else {
            return 0;
        }
    }
}
