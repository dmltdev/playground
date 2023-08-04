const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log(
      "Input is invalid. It should be either rock, paper, or scissors.",
    );
  }
};
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won.";
    } else {
      return "User won.";
    }
  } else if (userChoice === "paper") {
    if ((computerChoice = "scissors")) {
      return "Computer won.";
    } else {
      return "User won.";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won.";
    } else {
      return "User won.";
    }
  }
};

const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log("User choice: " + userChoice);
  console.log("Computer choice:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice) + "\n");
};

playGame("rOcK");
playGame("PaPeR");
playGame("SCISSORS");
