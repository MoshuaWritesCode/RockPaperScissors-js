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

let humanScore = 0;
let computerScore = 0;
