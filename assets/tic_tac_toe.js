function startGame() {
	document.turn = "X";
}

// display message
function theMessages(msg) {
	document.getElementById("message").innerText = msg;
}

// checks for the player's turn
function nextMove(box) {
	if (box.innerText == "") {
		box.innerText = document.turn;
		nextTurn();
	} else {
		theMessages("Hey, you can't move there, silly goose!");
	}
}

// checks for the next player's turn after the initial move
function nextTurn() {
	if (document.turn == "X") {
		document.turn = "O";
	} else {
		document.turn = "X";
	}

	theMessages("It's " + document.turn + "'s turn now!");
}

// to check each row for x/o option
function checkRow(x, y, z, move) {
	var result = false;
if () {

} else {

}

}