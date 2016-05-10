function startGame() {
	document.turn = "X";
}

function theMessages(msg) {
	document.getElementById("message").innerText = msg;
}

function nextMove(box) {
	box.innerText = document.turn;
	nextTurn();
}

function nextTurn() {
	if (document.turn == "X") {
		document.turn = "O";
	} else {
		document.turn = "X";
	}

	theMessages("It's " + document.turn + "'s turn now!");
}