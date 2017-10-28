// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[3];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("user flipped queen");

console.log("user flipped king");

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
// testing commit action