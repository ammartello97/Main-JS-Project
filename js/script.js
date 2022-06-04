function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Scissors")
  ) {
    return "It's a tie";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissors" && playerSelection == "Paper")
  ) {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "There is a wrong with your input!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("What is your choice (Rock, Paper, Scissors)?");
    computerSelection = computerPlay();

    playerSelection = playerSelection.toLowerCase();
    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.substring(1);
    console.log("Round", i + 1, ":");
    console.log(playRound(playerSelection, computerSelection));
  }
}

var playerSelection;
var computerSelection;

game();
