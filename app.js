//Create Deck of cards



let firstPlayer = []
let secondPlayer = []

let player1Score = 26
let player2Score = 26

// 1. Create full-deck by appending those 4 suit arrays
let deck = [];
// card values and types
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
let types = ["C", "D", "H", "S"];

window.onload = () => {
    buildDeck();
    shuffleDeck();
    }
// 2. call dealDeck(), which uses the global full-deck to fill the 2 global sub-arrays
//
// bool isPlayerATurn = true; boolean keeps track of who's turn
// isPlayerATurn = !(isPlayerATurn); while loop needed for duration of game

 // Create function that randomly selects "suit"  


// create an if statement that will chose based on suit's random array      




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// function that randomizes second player's cards


// create an if statement that will chose based on suit's random array      



function chekingscores() {
    if (player1Score <= 0) {
      player1Score = 0;
      alert("Dealer Win!");
      document.getElementById("mainbtn").disabled = true;
    } else if (player2Score <= 0) {
      player2Score = 0;
      alert("User Win!");
      document.getElementById("mainbtn").disabled = true;
    }
  }