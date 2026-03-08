// Game choices and their emojis
const choices = {
  rock: { emoji: "🪨", name: "Rock" },
  paper: { emoji: "📄", name: "Paper" },
  scissors: { emoji: "✂️", name: "Scissors" },
};

// Score tracking
let playerScore = 0;
let computerScore = 0;

/**
 * Play the game when user clicks a button
 * @param {string} playerChoice - User's choice (rock, paper, scissors)
 */
function playGame(playerChoice) {
  // Get random computer choice
  const computerChoiceList = Object.keys(choices);
  const computerChoice =
    computerChoiceList[
      Math.floor(Math.random() * computerChoiceList.length)
    ];

  // Determine the winner
  const result = determineWinner(playerChoice, computerChoice);

  // Update UI with choices and result
  updateDisplay(playerChoice, computerChoice, result);

  // Update scores
  updateScore(result);
}

/**
 * Determine the winner of the game
 * @param {string} player - Player's choice
 * @param {string} computer - Computer's choice
 * @returns {string} - 'win', 'lose', or 'draw'
 */
function determineWinner(player, computer) {
  // If choices are the same, it's a draw
  if (player === computer) {
    return "draw";
  }

  // Rock beats Scissors
  if (player === "rock" && computer === "scissors") {
    return "win";
  }

  // Paper beats Rock
  if (player === "paper" && computer === "rock") {
    return "win";
  }

  // Scissors beats Paper
  if (player === "scissors" && computer === "paper") {
    return "win";
  }

  // Otherwise, player loses
  return "lose";
}

/**
 * Update the display with choices and result
 * @param {string} playerChoice - Player's choice
 * @param {string} computerChoice - Computer's choice
 * @param {string} result - Game result
 */
function updateDisplay(playerChoice, computerChoice, result) {
  // Update player choice display
  document.getElementById("playerChoice").textContent =
    choices[playerChoice].emoji;
  document.getElementById("playerChoiceName").textContent =
    choices[playerChoice].name;

  // Update computer choice display
  document.getElementById("computerChoice").textContent =
    choices[computerChoice].emoji;
  document.getElementById("computerChoiceName").textContent =
    choices[computerChoice].name;

  // Update result text
  const resultElement = document.getElementById("resultText");
  resultElement.innerHTML = "";

  if (result === "win") {
    resultElement.className = "result-text result-win";
    resultElement.textContent = "🎉 You Win!";
  } else if (result === "lose") {
    resultElement.className = "result-text result-lose";
    resultElement.textContent = "😢 You Lose!";
  } else {
    resultElement.className = "result-text result-draw";
    resultElement.textContent = "🤝 Draw!";
  }
}

/**
 * Update the scoreboard based on the game result
 * @param {string} result - Game result
 */
function updateScore(result) {
  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  }

  // Update score display
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

/**
 * Reset the score and clear the display
 */
function resetScore() {
  playerScore = 0;
  computerScore = 0;

  // Update score display
  document.getElementById("playerScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";

  // Clear result display
  document.getElementById("playerChoice").textContent = "—";
  document.getElementById("computerChoice").textContent = "—";
  document.getElementById("playerChoiceName").textContent = "";
  document.getElementById("computerChoiceName").textContent = "";

  const resultElement = document.getElementById("resultText");
  resultElement.className = "result-text";
  resultElement.innerHTML =
    '<span class="result-placeholder">Make your move!</span>';
}
