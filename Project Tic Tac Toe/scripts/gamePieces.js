
function Board () {
    this.grid = Array(3).fill(null).map( () => Array(3).fill(null) );
    
    const choices = ['O', 'X']
    // insert into board
    this.playerChoice = function insert(row, col, choice) {
        this.grid[row][col] = choice
    }
}

// return new instance of empty Board
function newBoard () {
    return new Board()
}



module.exports = {newBoard};