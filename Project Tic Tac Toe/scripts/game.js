// logic to play
const readline = require("readline");
const {newBoard, Player, Players} = require("./gamePieces");

// In

// display the board with pieces
function display(Board) {
    Board.grid.forEach((element) => console.log(element));
}

// make a move by a player
function playerMove (Board, Player) {
}

const gameBoard = newBoard()

gameBoard.playerChoice(0,0,'X')
gameBoard.playerChoice(2,0,'O')
gameBoard.playerChoice(1,2,'X')
display(gameBoard)
