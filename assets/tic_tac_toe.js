function startGame() {
	document.turn = "X";
	document.winner = null;
	theMessages(document.turn + " goes first");
}

// display message
function theMessages(msg) {
	document.getElementById("message").innerText = msg;
}

// checks for the player's turn
function nextMove(box) {
	if (document.winner !== null) {
		theMessages(document.winner + " won already. Don't be a sore loser.");
	} else if (box.innerText == "") {
		box.innerText = document.turn;
		nextTurn();
	} else {
		theMessages("Hey, you can't move there, silly goose!");
	}
}

// checks for the next player's turn after the initial move
function nextTurn() {
	if(checkForTheWinner(document.turn)) {
		theMessages("Yay! Congrats, " + document.turn + "! You won!");
		document.turn = document.winner;
	} else if (document.turn == "X") {
		document.turn = "O";
		theMessages("It's " + document.turn + "'s turn now!");
	} else {
		document.turn = "X";
		theMessages("It's " + document.turn + "'s turn now!");
	}
}

// check every possible way a player can win
function checkForTheWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)) {
		result = true;
	}
	return result;
}

// to check each row for x/o option
function checkRow(x, y, z, move) {
	var result = false;
	if (getBox(x) == move && getBox(y) == move && getBox(z) == move ) {
		result = true;
	}
	return result;
}

// grabs box number
function getBox (num) {
	return document.getElementById("box" + num).innerText;
}