import { Players } from "./gamePieces.js";

document.getElementById("startButton").addEventListener("click", function () {
    // get player names
    const player1Name = document.getElementById("player1").value;
    const player2Name = document.getElementById("player2").value;
    const alertMessage = document.getElementById('alertMessage');

    // create player objects
    if (player1Name && player2Name) {
       const [playerA, playerB] = Players(player1Name, player2Name)
       console.log(`Player 1: ${playerA.name} has piece ${playerA.choice}`)
       console.log(`Player 2: ${playerB.name} has piece ${playerB.choice}`)
       
       // we want these names to be available later too so we can make them global
        //window.Players = [playerA, playerB]

        // no alert if nothing wrong
        alertMessage.style.visibility = "hidden";

        // start game
        //redirect to game page with parameters for name passed
        location.href = `../html/game.html?playerA=${encodeURIComponent(playerA.name)}&playerB=${encodeURIComponent(playerB.name)}` 
    } else {
        console.log("Player name not entered.")
        alertMessage.textContent = 'Please enter names for both players.';
        alertMessage.style.visibility = 'visible';
    }
} )