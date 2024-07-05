//Rock, Paper, Scissors Bonus Challenges
// Stretch: Rock, Paper, Scissors, Lizard, Spock

const randomChoice = () => {
  const choice = Math.floor(Math.random() * 5);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  } else if (choice === 3) {
    return "spock";
  } else {
    return "lizard";
  }
};

const winner = (player1Choice, player2Choice) => {
  if (player1Choice === player2Choice) {
    return "It's a tie";
  } else if (player1Choice === "rock" && player2Choice === "scissors") {
    return "Player 1 Wins!";
  } else if (player1Choice === "paper" && player2Choice === "scissors") {
    return "Player 2 Wins!";
  } else if (player1Choice === "paper" && player2Choice === "rock") {
    return "Player 1 Wins!";
  } else if (player1Choice === "spock" && player2Choice === "paper") {
    return "Player 2 Wins!";
  } else if (player1Choice === "spock" && player2Choice === "rock") {
    return "Player 1 Wins!";
  } else if (player1Choice === "spock" && player2Choice === "scissors") {
    return "Player 1 Wins!";
  } else if (player1Choice === "spock" && player2Choice === "lizard") {
    return "Player 2 Wins!";
  } else if (player1Choice === "lizard" && player2Choice === "paper") {
    return "Player 1 Wins!";
  } else if (player1Choice === "lizard" && player2Choice === "rock") {
    return "Player 2 Wins!";
  } else if (player1Choice === "lizard" && player2Choice === "scissors") {
    return "Player 2 Wins!";
  } else if (player1Choice === "lizard" && player2Choice === "spock") {
    return "Player 1 Wins!";
  } else if (player2Choice === "rock" && player1Choice === "scissors") {
    return "Player 2 Wins!";
  } else if (player2Choice === "paper" && player1Choice === "scissors") {
    return "Player 1 Wins!";
  } else if (player2Choice === "paper" && player1Choice === "rock") {
    return "Player 2 Wins!";
  } else if (player2Choice === "spock" && player1Choice === "paper") {
    return "Player 1 Wins!";
  } else if (player2Choice === "spock" && player1Choice === "rock") {
    return "Player 2 Wins!";
  } else if (player2Choice === "spock" && player1Choice === "scissors") {
    return "Player 2 Wins!";
  } else if (player2Choice === "spock" && player1Choice === "lizard") {
    return "Player 1 Wins!";
  } else if (player2Choice === "lizard" && player1Choice === "paper") {
    return "Player 2 Wins!";
  } else if (player2Choice === "lizard" && player1Choice === "rock") {
    return "Player 1 Wins!";
  } else if (player2Choice === "lizard" && player1Choice === "scissors") {
    return "Player 1 Wins!";
  } else if (player2Choice === "lizard" && player1Choice === "spock") {
    return "Player 2 Wins!";
  }
};

const player1 = randomChoice();
const player2 = randomChoice();

console.log("Player 1 chose: ", player1);
console.log("Player 2 chose: ", player2);

const result = winner(player1, player2);

console.log(result);
