//Create Deck of cards

let firstPlayer = [];
let secondPlayer = [];

let player1Score = 26;
let player2Score = 26;

// creating global variable for deck
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

//function to find numbers inside of a string

//split card into two substrings delimiter is the "-"
//a delimiter is one or more characters that separate text strings , hence the "-" 

//using .split to split a string into an array of substrings, returns new array  (" ") is used as a separator, the string is split between words, hence finding the cards via delimiter

//targeting cardValue array using !isNaN() in order to find the number inside the string

function getCardValue(card) {
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

  // had to make two seperate variables for p1 and p2 or they would've kept getting the same cards each time 

  let card = deck[Math.floor(Math.random() * deck.length)];
  let card2 = deck[Math.floor(Math.random() * deck.length)];

  // used set attribute to display cards on the DOM

  document.getElementById("card1").setAttribute("src", `./cards/${card}.png`);

  document.getElementById("card2").setAttribute("src", `./cards/${card2}.png`);

  // calling the getCardValue() function to apply it to the randomized decks

  let cardOneValue = getCardValue(card);
  let cardTwoValue = getCardValue(card2);

  // used if statements to distribute points for p1 and p2

  if (cardOneValue === cardTwoValue) {
    player1Score -= 4;
    player2Score -= 4;
    
    // struggled with adding the draw 4 aspect of the game so I just commented it out 
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
  // calling checkingScores() function inside of cardGame
  checkingScores();
}
// function that ends the game if either player's score reaches 0
function checkingScores() {
  if (player1Score <= 0) {
    player1Score = 0;
    alert("You Lose!");
    document.querySelector(".deal").disabled = true;
  } else if (player2Score <= 0) {
    player2Score = 0;
    alert("You Win!");
    document.querySelector(".deal").disabled = true;
  }
}

// show me / hide me function for instructions

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
