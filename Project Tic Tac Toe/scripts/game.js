// logic to play

const {newBoard} = require("./gamePieces");

// display the board with pieces
function display(Board) {
    Board.grid.forEach((element) => console.log(element));
}

const gameBoard = newBoard()

gameBoard.playerChoice(0,0,'X')
gameBoard.playerChoice(2,0,'O')
gameBoard.playerChoice(1,2,'X')
display(gameBoard)
