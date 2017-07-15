console.log("Up and running!")

var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  }
];
var cardsInPlay = []

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}


var flipCard = function() {
  cardId = this.getAttribute('data-id')
  console.log(this)
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank);
  console.log(cardsInPlay);
  if (cardsInPlay.length==2){
    checkForMatch();
  }
}

var createBoard = function() {
  gameBoard = document.getElementById("gameboard");
  gameBoard.innerHTML="";
  cardsInPlay=[];
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('img');
    newCard.setAttribute('src', "images/back.png");
    newCard.setAttribute('data-id', i);
    gameBoard.appendChild(newCard);
    newCard.addEventListener('click', flipCard);
  }
}
createBoard();

var button = document.getElementById("button");
button.addEventListener("click",createBoard)
console.log(button);
