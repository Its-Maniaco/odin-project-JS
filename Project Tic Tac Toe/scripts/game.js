// logic to play
import { newBoard, Players } from "./gamePieces.js";

function startGame() {
  const player1Name = document.getElementById("player1").value;
  const player2Name = document.getElementById("player2").value;

  const [player1, player2] = Players(player1Name, player2Name);

  // Create a single instance of the board
  const gameBoard = newBoard();

  // event listen for the game board
  document
    .getElementById("gameBoard")
    .querySelectorAll(".cell")
    .forEach((cell) => {
      cell.addEventListener("click", handleCellClickEvent);
    });

  // handle player's move on grid click
  function handleCellClickEvent(event) {
    const cell = event.target;
    const row = cell.getAttribute("data-row");
    const col = cell.getAttribute("data-col");
    console.log("Clicked " + row + " " + col);
    gameBoard.attemptPlay(row, col, "X");
  }
}
