// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
	}
}


function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);



// console.log("user flipped queen");

// console.log("user flipped king");


// testing commit action