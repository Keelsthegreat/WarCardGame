//Create Deck of cards

let firstPlayer = [];
let secondPlayer = [];

let player1Score = 26;
let player2Score = 26;

// 1. Create full-deck by appending those 4 suit arrays
let deck = [];
// card values and types
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let types = ["C", "D", "H", "S"];

// Created a function that loads the deck, shuffle deck and score as soon as the webpage loads
window.onload = () => {
  buildDeck();
  shuffleDeck();
  document.getElementById("userScore").innerHTML = `${player1Score}`;
  document.getElementById("dealerScore").innerHTML = `${player2Score}`;
};

// iterating through values and types arrays to match the name of the cards inside the cards folder
//pushing values - types into deck
function buildDeck() {
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + "-" + types[i]);
    }
  }
  console.log(deck);
}



//shuffle the cards
function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

//make the button
const dealDeck = document.querySelector(".deal");
dealDeck.addEventListener("click", () => {
  deal = shuffleDeck(deck);
});
console.log(dealDeck);

function getCardValue(card) {
  //split card into two substrings delimiter is the "-"
  let cardValue = card.split("-")[0];
  if (!isNaN(cardValue)) {
    return Number(cardValue);
  } else if (cardValue == "J") {
    return 11;
  } else if (cardValue == "Q") {
    return 12;
  } else if (cardValue == "K") {
    return 13;
  } else if (cardValue == "A") {
    return 14;
  }
  console.log(cardValue);
}

function cardGame() {
  // let userCard = Math.floor(Math.random() * 13 + 2);
  //firstPlayer.push(userCard);
  let card = deck[Math.floor(Math.random() * deck.length)];
  let card2 = deck[Math.floor(Math.random() * deck.length)];

  document.getElementById("card1").setAttribute("src", `./cards/${card}.png`);

  // let dealerCard = Math.floor(Math.random() * 13 + 2);
  //secondPlayer.push(dealerCard);

  document.getElementById("card2").setAttribute("src", `./cards/${card2}.png`);
  let cardOneValue = getCardValue(card);
  let cardTwoValue = getCardValue(card2);
  //scores
  if (cardOneValue === cardTwoValue) {
    player1Score -= 4;
    player2Score -= 4;
    // let randWin = Math.round(Math.random());
    // if (randWin == 0) {
    //   player1Score += 4;
    // } else {
    //   player2Score += 4;
    // }
  } else if (cardOneValue > cardTwoValue) {
    player1Score++;
    player2Score--;
  } else if (cardTwoValue > cardOneValue) {
    player1Score--;
    player2Score++;
  }

  //Display Scores
  document.getElementById("userScore").innerHTML = player1Score;
  document.getElementById("dealerScore").innerHTML = player2Score;
  checkingScores();
}

// function that randomizes second player's cards

// create an if statement that will chose based on suit's random array

function checkingScores() {
  if (player1Score <= 0) {
    player1Score = 0;
    alert("You Lose!");
    document.querySelector(".drawCard").disabled = true;
  } else if (player2Score <= 0) {
    player2Score = 0;
    alert("You Win!");
    document.querySelector(".drawCard").disabled = true;
  }
}

// show me / hide me function 

function showMe(){
  let instructions = document.querySelector(".instructions");
  let showMe = document.getElementsByClassName("showMe");
  instructions.style.display='block';
  console.log('click')
}

function hideMe(){
  let instructions = document.querySelector(".instructions");
  let hideMe = document.getElementsByClassName("hideMe");
  instructions.style.display ='none';
  console.log('click1')
}
