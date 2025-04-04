function getComputerChoice() {
  // Randomly determines rock, paper or scissors for the computer.
  // Returns a string.
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else if (choice === 2) return "scissors";
}

function getHumanChoice() {
  // Gets the human choice via a prompt. Returns a lowercase string.
  const choice = prompt("Choose your weapon: rock, paper or scissors");
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if (humanChoice === computerChoice) {
      console.log("Tie!");
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
      }
      else if (computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
      } else if (computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
      } else if (computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
      }
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
