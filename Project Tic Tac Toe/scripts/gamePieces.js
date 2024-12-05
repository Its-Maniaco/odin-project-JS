function Board() {
  this.grid = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));
  this.moveCount = 0;
  // insert into board

  this.attemptPlay = function insert(row, col, choice) {
    // var success = false // flag for if move was successfull
    while (true) {
      if (this.grid[row][col] === null) {
        this.grid[row][col] = choice;
        this.moveCount += 1;
        // update grid display
        document.querySelector(
          `[data-row='${row}'][data-col='${col}']`
        ).textContent = choice;

        if (this.moveCount > 4) {
          if (this.winCheck(choice)) {
            console.log(`${choice} WINS!!!`);
            //process.exit()
          } else if (this.moveCount() > 8) {
            console.log("Tie game");
          }
        }
        break;
      } else {
        console.error("Invalid move");
        break;
      }
    }
    display(this);
  };

  this.winCheck = function (choice) {
    // check row wise
    for (var row = 0; row < 3; row++) {
      if (this.grid[row].every((cell) => cell === choice)) return true;
    }
    // check col wise
    for (var col = 0; col < 3; col++) {
      if (this.grid.every((row) => row[col] === choice)) return true;
    }

    // check diagonal
    if (
      this.grid[0][0] === choice &&
      this.grid[1][1] === choice &&
      this.grid[2][2] === choice
    )
      return true;
    if (
      this.grid[0][2] === choice &&
      this.grid[1][1] === choice &&
      this.grid[2][0] === choice
    )
      return true;

    return false;
  };
}

// return new instance of empty Board
export function newBoard() {
  return new Board();
}

function Player(name, choice) {
  this.name = name;
  this.choice = choice;
}

// create 2 Player
export function Players(player1, player2) {
  return [new Player(player1, "X"), new Player(player2, "O")];
}

// display the board with marks
function display(Board) {
  Board.grid.forEach((element) => console.log(element));
}
