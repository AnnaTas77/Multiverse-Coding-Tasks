//Rock, Paper, Scissors Bonus Challenges
// Stretch: Rock, Paper, Scissors, Lizard, Spock

const randomChoice = () => {
  const choice = Math.floor(Math.random() * 5);
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  if (choice === 2) return "scissors";
  if (choice === 3) return "spock";
  if (choice === 4) return "lizard";
};

const winner = (player1Choice, player2Choice) => {
  if (
    (player1Choice !== "rock" &&
      player1Choice !== "paper" &&
      player1Choice !== "scissors" &&
      player1Choice !== "lizard" &&
      player1Choice !== "spock") ||
    (player2Choice !== "rock" &&
      player2Choice !== "paper" &&
      player2Choice !== "scissors" &&
      player2Choice !== "lizard" &&
      player2Choice !== "spock")
  ) {
    return "Invalid input.";
  }

  if (player1Choice === player2Choice) {
    return "It's a tie!";
  }

  if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper") ||
    (player1Choice === "spock" && player2Choice === "rock") ||
    (player1Choice === "spock" && player2Choice === "scissors") ||
    (player1Choice === "lizard" && player2Choice === "paper") ||
    (player1Choice === "lizard" && player2Choice === "spock")
  ) {
    return "Player 1 Wins!";
  }

  if (
    (player2Choice === "rock" && player1Choice === "scissors") ||
    (player2Choice === "paper" && player1Choice === "rock") ||
    (player2Choice === "scissors" && player1Choice === "paper") ||
    (player2Choice === "spock" && player1Choice === "rock") ||
    (player2Choice === "spock" && player1Choice === "scissors") ||
    (player1Choice === "lizard" && player2Choice === "paper") ||
    (player1Choice === "lizard" && player2Choice === "spock")
  ) {
    return "Player 2 Wins!";
  }
};

const player1 = randomChoice();
const player2 = randomChoice();

console.log("Player 1 chose: ", player1);
console.log("Player 2 chose: ", player2);

const result = winner(player1, player2);

console.log(result);
console.log(winner("paper", "chicken"));
console.log(winner("chicken", "chicken"));
