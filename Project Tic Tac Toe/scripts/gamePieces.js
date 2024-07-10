const { exit } = require("process");
const readline = require("readline");
function Board () {
    this.grid = Array(3).fill(null).map( () => Array(3).fill(null) );
    
    // insert into board

    this.attemptPlay = function insert(row, col, choice) {
       // const [row,col] = prompt("Enter location").split(" ");
       if (this.grid[row][col] === null) {
        this.grid[row][col] = choice;
        if (this.winCheck(choice)) {
            console.log(`${choice} WINS!!!`)
            exit
        }
       } 
       else {
            console.error("Invalid move");
       }
    }

    // TODO: Optimize? keep a move count for tie?
    this.winCheck = function (choice) {   
        // check row wise
        for (var r=0; r<3; r++) {
            var count = 0
            for (var c=0; c<3; c++) {
                if (this.grid[r][c] === choice) count += 1;
                else break;
            }
            if (count === 3) return true
        }

         // check col wise
         for (var c=0; c<3; c++) {
            var count = 0
            for (var r=0; r<3; r++) {
                if (this.grid[r][c] === choice) count += 1;
                else  break;
            }
            if (count === 3) return true
        }

        // check diagonal
        if (this.grid[0][0] === choice && this.grid[1][1] === choice && this.grid[2][2] === choice) {
            return true;
        }
        if (this.grid[0][2] === choice && this.grid[1][1] === choice && this.grid[2][0] === choice) {
            return true;
        }

        return false
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


// create 2 Player
function Players (playerA, playerB) {
    return [new Player(playerA, 'X'), new Player(playerB, 'O')]
}

module.exports = {newBoard, Players};