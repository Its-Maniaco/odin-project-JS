
function Board () {
    this.grid = Array(3).fill(null).map( () => Array(3).fill(null) );
    
    const choices = ['O', 'X']
    // insert into board
    this.playerChoice = function insert(row, col, choice) {
       this.grid[row][col] !== NULL ? this.grid[row][col] = choice : console.error("pick a different place");
    }
}

// return new instance of empty Board
function newBoard () {
    return new Board()
}

function Player (name, choice) {
    this.name = name
    this.choice = choice
}

function newPlayers (playerA, playerB) {
    return [new Player(playerA, 'X'), new Player(playerB, 'O')]
}

module.exports = {newBoard, newPlayers};