// logic to play
const readline = require("readline");
const {newBoard, Player, Players} = require("./gamePieces");

const gameBoard = newBoard()

gameBoard.attemptPlay(0,0,'X')
gameBoard.attemptPlay(2,0,'O')
gameBoard.attemptPlay(0,1,'X')
gameBoard.attemptPlay(2,2,'O')
gameBoard.attemptPlay(0,2,'X')
gameBoard.attemptPlay(1,1,'O')

