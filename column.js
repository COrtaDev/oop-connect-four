export class Column {
    constructor() {
        let tokens = [null, null, null, null, null, null];
    }
    add(player) {
        for (let i = 5; i >= 0; i--) {
            if (token[i] === null) {
                this.tokens.push(player);
                return;
            }
        }
    }
    getTokenAt(row) {
        return this.tokens[row];
    }
}
